import React from 'react';
import { Lock, Smile } from 'lucide-react'; // Optional: For icons

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md flex items-center justify-between rounded-b-2xl">
      <div className="flex items-center space-x-3">
        <Smile className="w-8 h-8 text-yellow-300" />
        <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">
          EmojiFy
        </h1>
      </div>
      <div className="hidden sm:flex text-sm space-x-6">
        {/* <a href="" className="hover:underline">
          How it Works
        </a> */}
        <a href="https://github.com/bhautikrathod9/emojify" className="hover:underline">
          GitHub
        </a>
      </div>
    </header>
  );
};

export default Header;
