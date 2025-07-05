import { splitEmojis } from './emojiSpliter';

// Character set and emoji list
export const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .!?';
export const emojis = [
  '😀', '🎉', '🚀', '🌈', '🔥', '💡', '💎', '✨', '🔒', '🔓',
  '🧠', '😎', '😈', '👻', '🤖', '💥', '💫', '🍕', '🍩', '🍪',
  '🎯', '🎮', '🎵', '🌟', '🌍', '🪐', '📦', '📌', '📍', '📎',
  '📚', '📖', '📝', '🔑', '🗝️', '⚡', '☂️', '🧲', '🛡️', '🎁',
  '🥇', '🏆', '💰', '🧧', '📢', '📣', '🔊', '🔔', '💬', '🗨️',
  '📱', '💻', '🖥️', '🧮', '🖊️', '📷', '🧃', '🧁', '🍫',
  '🍭', '🍿', '🎂', '🎈', '🥳', '📀', '🪄' // new ones
];

export const getPinShift = (pin) => {
  return [...pin].reduce((acc, c) => acc + c.charCodeAt(0), 0) % emojis.length;
};

export const encryptText = (text, pin) => {
  const shift = getPinShift(pin);
  return text
    .split('')
    .map((char) => {
      const idx = charSet.indexOf(char);
      if (idx === -1) return char;
      const emojiIdx = (idx + shift) % emojis.length;
      return emojis[emojiIdx];
    })
    .join('');
};

export const decryptText = (emojiStr, pin) => {
  const shift = getPinShift(pin);
  return splitEmojis(emojiStr)
    .map((emoji) => {
      const emojiIdx = emojis.indexOf(emoji);
      if (emojiIdx === -1) return emoji;
      const charIdx = (emojiIdx - shift + emojis.length) % emojis.length;
      return charSet[charIdx];
    })
    .join('');
};
