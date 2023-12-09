import React, { useContext } from 'react';
import { TabContext } from './TabContext';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import TechSection from './sections/TechSection';

function MainContent() {
  const { activeTab } = useContext(TabContext);

  return (
    <main className="flex flex-col md:flex-row w-full">
      {activeTab === 'home' && <HomeSection />}
      {activeTab === 'about' && <AboutSection />}
      {activeTab === 'tech' && <TechSection />}
      {/* Render other sections based on activeTab */}
    </main>
  );
}

export default MainContent;
