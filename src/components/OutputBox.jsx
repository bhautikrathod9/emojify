import React, { useState, useEffect } from 'react';
import { ClipboardCopy, Check } from 'lucide-react';

const OutputBox = ({ outputText }) => {
  const [copied, setCopied] = useState(false);

  // Revert 'copied' state when outputText changes
  useEffect(() => {
    setCopied(false);
  }, [outputText]);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    // Optional: keep this for animation timing, but not needed to reset now
    // setTimeout(() => setCopied(false), 1500);
  };

  if (!outputText) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {`Output ${outputText.length < 12 ? '' : 'Result'}`}
      </label>
      <div className="relative bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
        <pre className="whitespace-pre-wrap break-words text-gray-700">{outputText}</pre>

        <button
          onClick={handleCopy}
          className="absolute top-4 right-3 p-1 rounded hover:bg-gray-100 transition"
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <Check size={18} className="text-green-500" />
          ) : (
            <ClipboardCopy size={18} className="text-gray-600" />
          )}
        </button>
      </div>
    </div>
  );
};

export default OutputBox;
