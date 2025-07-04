import React from 'react';

const ActionButton = ({ mode, handleAction }) => {
  return (
    <div className="w-full max-w-2xl mx-auto px-4 mt-6 text-center">
      <button
        onClick={handleAction}
        className={`w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-xl text-white transition-all shadow-md
          ${mode === 'encrypt' ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-pink-600 hover:bg-pink-700'}
        `}
      >
        {mode === 'encrypt' ? 'Encrypt 🔐' : 'Decrypt 🔓'}
      </button>
    </div>
  );
};

export default ActionButton;
