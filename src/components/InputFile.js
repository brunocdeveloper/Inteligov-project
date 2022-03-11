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

  const handleSubmitFile = () => {
    if(file) {
      reader.onload = function(event) {
        const textCsv = event.target.result;
        const [head, ...contents] = textCsv.split('\n');
        const splitHeader = head.split(',')
        setHeader(splitHeader);
        const content = contents.map((lines) => lines.split(','));
        setContent(content);
        setInitialDocument([splitHeader, ...content]);
      };
      reader.readAsText(file);
      setRenderTable(true);
    };
  };

  return (
    <div>
      <h1>Bem vindo!</h1>
      <h2>Escolha um arquivo ou arraste</h2>
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