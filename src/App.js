import React, { useState } from "react";
import InputFile from "./components/InputFile";
import AppProvider from "./context/AppProvider";

function App() {
  return(
    <AppProvider>
      <InputFile/>
    </AppProvider>
  );
};

export default App;
