import React from 'react';

export default function Header({ toggleDarkMode, darkMode }) {
  return (
    <header className="p-6 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-800 w-full">
      <h1 className="text-2xl font-bold">SoftSell</h1>
      <button
        className={`px-4 py-2 rounded ${
          darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white'
        }`}
        onClick={toggleDarkMode}
      >
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}
