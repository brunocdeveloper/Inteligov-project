import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [file, setFile] = useState(null);

  const contextValue = {
    file,
    setFile,
  }

 return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );

}

export default AppProvider;
