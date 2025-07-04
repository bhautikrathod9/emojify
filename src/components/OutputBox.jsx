import React, { useState } from 'react';
import { ClipboardCopy } from 'lucide-react';

const OutputBox = ({ outputText }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!outputText) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-8 px-4">
      <label className="block text-lg font-semibold text-gray-800 mb-2">
        {`Output ${outputText.length < 12 ? '' : 'Result'}`}
      </label>
      <div className="relative bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
        <pre className="whitespace-pre-wrap break-words text-gray-700">{outputText}</pre>
        <ClipboardCopy
          onClick={handleCopy}
          className="absolute top-4 right-3 text-sm text-indigo-600 hover:underline"
        >
          {copied ? 'Copied!' : 'Copy'}
        </ClipboardCopy>
      </div>
    </div>
  );
};

export default OutputBox;


<ClipboardCopy />