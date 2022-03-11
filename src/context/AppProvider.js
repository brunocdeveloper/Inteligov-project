import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [file, setFile] = useState(null);
  const [header, setHeader] = useState(null);
  const [content, setContent] = useState(null);
  const [initialDocument, setInitialDocument] = useState([]);
  const [renderTable, setRenderTable] = useState(false);

  const contextValue = {
    initialDocument,
    setInitialDocument,
    file,
    setFile,
    header,
    setHeader,
    content,
    setContent,
    renderTable,
    setRenderTable
  };

 return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );

}

export default AppProvider;
