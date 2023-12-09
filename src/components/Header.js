import React, { useContext } from 'react';
import { TabContext } from './TabContext';

function Header() {
  const { activeTab, setActiveTab } = useContext(TabContext);

  return (
    <header className="border-b border-gray-200">
      <nav className="flex justify-center py-2">
        <div className="flex justify-center w-full max-w-md mx-auto">
          <button
            className={`mx-2 px-4 py-2 ${activeTab === 'home' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className={`mx-2 px-4 py-2 ${activeTab === 'about' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('about')}
          >
            About Me
          </button>
          <button
            className={`mx-2 px-4 py-2 ${activeTab === 'tech' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('tech')}
          >
            Tech Stack
          </button>
          {/* More tabs as needed */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
