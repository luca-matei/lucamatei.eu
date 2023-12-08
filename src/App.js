import React from 'react';
import ProfileSection from './components/ProfileSection';
import TabsSection from './components/TabsSection';
import './App.css'; // Your main App specific styles
import backgroundImage from './assets/img/bg.gif';

function App() {
  return (
    <div className="bg-cover bg-fixed bg-no-repeat flex flex-col items-center justify-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})`, backdropFilter: "blur(4px)" }}>
      <div className="flex flex-col md:flex-row md:max-w-4xl w-full mx-auto my-10 bg-white rounded-lg shadow-md overflow-hidden text-gray-600">
        <ProfileSection />
        <TabsSection />
      </div>
    </div>
  );
}

export default App;
