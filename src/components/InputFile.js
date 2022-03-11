import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import { ContainerDragAndDrop } from '../styled-components/InputFile';

function InputFile() {
  const { 
    setFile, setHeader,
    setContent, setInitialDocument,
    setRenderTable
  } = useContext(AppContext);

  const handleSubmitFile = (file) => {
    if(file) {
      const [head, ...contents] = file.split('\n');
      const splitHeader = head.split(',')
      setHeader(splitHeader);
      const content = contents.map((lines) => lines.split(','));
      setContent(content);
      setInitialDocument([splitHeader, ...content]);
      setRenderTable(true);
    };
  };

  return (
    <ContainerDragAndDrop
      onDragOver={(e) => {
      e.preventDefault();
      }}
      onDrop={(e) => { 
        e.preventDefault();
        Array.from(e.dataTransfer.files)
          .filter((file) => file.type === "text/csv")
          .forEach(async (file) => {
            const text = await file.text();
            setFile(text);
            handleSubmitFile(text);
          });
      }}
    >
      Arraste e solte seu documento aqui para carrega-lo
    </ContainerDragAndDrop>
  );
}

export default InputFile;