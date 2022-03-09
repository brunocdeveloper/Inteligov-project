import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';

function InputFile() {
  const { file, setFile, setHeader, header, setContent, content }  = useContext(AppContext);

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
    };
  };

  return (
    <div>
      <h1>Bem vindo!</h1>
      <h2>Escolha um arquivo ou arraste</h2>
      <input type="file" onChange={ handleFile } accept=".csv" />
      <button type="button" onClick={ handleSubmitFile }>Enviar</button>
      <table>
        <thead>
          <tr>
            { header &&
              Array.from({ length: 2 }).map((content, index) => (
                header.map((headerName) => (
                  <th>
                    <input
                      id={index}
                      key={index}
                      defaultValue={index === 0 ? headerName : '' }
                    />
                  </th>
                ))
              ))
            }
          </tr>
        </thead>
        <tbody>
        { content &&
            content.map((item, index) => (
              <tr>
              { item.map((arquive) => (<td><input placeholder={arquive}/></td>)) }
              </tr>)
            )
        }
        </tbody>
      </table>
     </div>
  );
}

export default InputFile;