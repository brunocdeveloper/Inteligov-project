import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [file, setFile] = useState(null);
  const [header, setHeader] = useState(null);
  const [content, setContent] = useState(null);

  const contextValue = {
    file,
    setFile,
    header,
    setHeader,
    content,
    setContent
  };

 return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );

}

export default AppProvider;
