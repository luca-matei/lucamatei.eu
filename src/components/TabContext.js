import React, { useState, createContext } from 'react';
import backgroundImage from "../assets/img/bg.gif";

export const TabContext = createContext();

export const TabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('home'); // Default active tab

  return (
      <TabContext.Provider value={{ activeTab, setActiveTab }}>
        {children}
      </TabContext.Provider>
  );
};
