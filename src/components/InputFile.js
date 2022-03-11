import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Download from './Download';
import Table from './Table';

function InputFile() {
  const { file, setFile, setHeader, setContent, setInitialDocument }  = useContext(AppContext);
  const [ renderTable, setRenderTable] = useState(false);

  const reader = new FileReader();

  const handleFile = ({ target }) => {
    setFile(target.files[0]);
  };

  const handleSubmitFile = (file) => {
    if(file) {
      console.log('textcsv', file);
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
    <div>
      <h1>Bem vindo!</h1>
      <div
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
        ARRASTE UM ARQUIVO
      </div>
      <input type="file" onChange={ handleFile } accept=".csv" />
      <button type="button" onClick={ handleSubmitFile }>Enviar</button>
      {
        renderTable && 
        <Table/>
      }
      {
        renderTable &&
        <Download />
      }
     </div>
  );
}

export default InputFile;