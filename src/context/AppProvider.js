import React from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  
  return (
    <AppContext.Provider
    value={}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider;
