import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Table from './Table';

function InputFile() {
  const { file, setFile, setHeader, setContent,  }  = useContext(AppContext);
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
        setHeader(head.split(','));
        const conteudo = contents.map((lines) => lines.split(','));
        setContent(conteudo);
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
     </div>
  );
}

export default InputFile;