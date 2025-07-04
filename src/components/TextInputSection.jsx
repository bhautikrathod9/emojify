import React from 'react';

const TextInputSection = ({ inputText, setInputText, mode }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mt-4 px-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {mode === 'encrypt' ? 'Enter Text to Encrypt' : 'Paste Emojis to Decrypt'}
      </label>
      <textarea
        rows="5"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={
          mode === 'encrypt'
            ? 'Type your secret message here...'
            : 'Paste the emoji string here...'
        }
        className="w-full p-4 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800 text-base resize-none shadow-sm bg-white"
      ></textarea>
      <div className="text-sm text-gray-500 mt-1 text-right">
        {inputText.length} / 500 characters
      </div>
    </div>
  );
};

export default TextInputSection;
