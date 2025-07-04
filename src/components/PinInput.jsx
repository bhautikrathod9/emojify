import React, { useState } from 'react';

const PinInput = ({ pin, setPin }) => {
  const [showPin, setShowPin] = useState(false);

  return (
    <div className="w-full max-w-2xl mx-auto mt-6 px-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        Enter PIN
      </label>
      <div className="flex items-center gap-2">
        <input
          type={showPin ? 'text' : 'password'}
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          maxLength={10}
          placeholder="Your secret PIN"
          className="w-full p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 outline-none text-gray-800 text-base bg-white shadow-sm"
        />
        <button
          onClick={() => setShowPin(!showPin)}
          className="text-sm px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition"
        >
          {showPin ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
};

export default PinInput;
