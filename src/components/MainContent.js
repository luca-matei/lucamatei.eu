import React, { useContext } from 'react';
import { TabContext } from './TabContext';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ExperienceSection from './sections/ExperienceSection';

function MainContent() {
  const { activeTab } = useContext(TabContext);

  return (
    <main className="flex flex-col md:flex-row w-full">
      {activeTab === 'home' && <HomeSection />}
      {activeTab === 'about' && <AboutSection />}
      {activeTab === 'experience' && <ExperienceSection />}
      {/* Render other sections based on activeTab */}
    </main>
  );
}

export default MainContent;
