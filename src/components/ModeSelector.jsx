import React from 'react';

const ModeSelector = ({ mode, setMode }) => {
  return (
    <div className="flex justify-center items-center my-6">
      <div className="inline-flex bg-gray-200 rounded-full p-1 shadow-inner">
        <button
          onClick={() => setMode('encrypt')}
          className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
            mode === 'encrypt'
              ? 'bg-indigo-500 text-white shadow'
              : 'text-gray-700'
          }`}
        >
          Encrypt 🔐
        </button>
        <button
          onClick={() => setMode('decrypt')}
          className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${
            mode === 'decrypt'
              ? 'bg-pink-500 text-white shadow'
              : 'text-gray-700'
          }`}
        >
          Decrypt 🔓
        </button>
      </div>
    </div>
  );
};

export default ModeSelector;
