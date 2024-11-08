// NavigationContext.js
import React, { createContext, useState } from 'react';

export const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [activeMenuItem, setActiveMenuItem] = useState('INICIO');

  return (
    <NavigationContext.Provider value={{ activeMenuItem, setActiveMenuItem }}>
      {children}
    </NavigationContext.Provider>
  );
};
