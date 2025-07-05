import GraphemeSplitter from 'grapheme-splitter';

export const splitEmojis = (str) => {
  const splitter = new GraphemeSplitter();
  return splitter.splitGraphemes(str);
};
