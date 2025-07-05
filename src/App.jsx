import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import TextInputSection from './components/TextInputSection';
import PinInput from './components/PinInput';
import ActionButton from './components/ActionButton';
import OutputBox from './components/OutputBox';
import GraphemeSplitter from 'grapheme-splitter';

// Character set and emoji map
const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789 .!?';
const emojis = [
  '😀', '🎉', '🚀', '🌈', '🔥', '💡', '💎', '✨', '🔒', '🔓',
  '🧠', '😎', '😈', '👻', '🤖', '💥', '💫', '🍕', '🍩', '🍪',
  '🎯', '🎮', '🎵', '🌟', '🌍', '🪐', '📦', '📌', '📍', '📎',
  '📚', '📖', '📝', '🔑', '🗝️', '⚡', '☂️', '🧲', '🛡️', '🎁',
  '🥇', '🏆', '💰', '🧧', '📢', '📣', '🔊', '🔔', '💬', '🗨️',
  '📱', '💻', '🖥️', '🧮', '🖊️', '📷', '🧃', '🧁', '🍫'
];

// Emoji-safe splitter
const splitEmojis = (str) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(str);
};

function App() {
  const [mode, setMode] = useState('encrypt');
  const [inputText, setInputText] = useState('');
  const [pin, setPin] = useState('');
  const [outputText, setOutputText] = useState('');
  const [error, setError] = useState('');

  const handleAction = () => {
    if (!inputText.trim() || !pin.trim()) {
      setError('Both text and PIN are required.');
      setOutputText('');
      return;
    }

    setError('');
    if (mode === 'encrypt') {
      setOutputText(encryptText(inputText, pin));
    } else {
      try {
        setOutputText(decryptText(inputText, pin));
      } catch (err) {
        setOutputText('');
        setError('Decryption failed. Check your PIN or emoji string.');
      }
    }
  };

  const encryptText = (text, pin) => {
    const shift = getPinShift(pin);
    return text
      .split('')
      .map((char) => {
        const idx = charSet.indexOf(char);
        if (idx === -1) return char; // leave unsupported characters
        const emojiIdx = (idx + shift) % emojis.length;
        return emojis[emojiIdx];
      })
      .join('');
  };

  const decryptText = (emojiStr, pin) => {
    const shift = getPinShift(pin);
    return splitEmojis(emojiStr)
      .map((emoji) => {
        const emojiIdx = emojis.indexOf(emoji);
        if (emojiIdx === -1) return emoji; // unknown emoji
        const charIdx = (emojiIdx - shift + emojis.length) % emojis.length;
        return charSet[charIdx];
      })
      .join('');
  };

  const getPinShift = (pin) => {
    return [...pin].reduce((acc, c) => acc + c.charCodeAt(0), 0) % emojis.length;
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 font-sans pb-10">
      <Header />
      <ModeSelector mode={mode} setMode={setMode} />
      <TextInputSection mode={mode} inputText={inputText} setInputText={setInputText} />
      <PinInput pin={pin} setPin={setPin} />
      <ActionButton mode={mode} handleAction={handleAction} />
      {error && (
        <div className="w-full max-w-2xl mx-auto mt-4 px-4 text-red-600 font-medium">
          ⚠️ {error}
        </div>
      )}
      <OutputBox outputText={outputText} />
    </div>
  );
}

export default App;
