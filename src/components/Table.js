import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { header, content, setContent } = useContext(AppContext)

  const tratamentDataTable = {
    createEmptyRowInputs: (dataContent) => {
      const EMPTY_INPUTS_LENGHT = 8;
      for(let index = 0; index < EMPTY_INPUTS_LENGHT; index ++) {
        dataContent.push(["", "", ""]);
        console.log('looping createEmptyRowInputs')
      }
    },

    createEmptyColumnInputs: (dataContent, header) => {
      const EMPTY_HEADER_LENGTH = 8;
      for(let index = 0; index < EMPTY_HEADER_LENGTH; index++) {
        dataContent.map((itens) => {
          itens.push("")
          console.log('looping createEmptyColumnInputs')
        });
        console.log('looping createEmptyColumnInputs')
      }
    },

    createEmptyInputHeader: (header) => {
      const HEADER_LENGTH = 2;
      for(let index = 0; index < HEADER_LENGTH; index ++) {
        header.push("")
        console.log('looping createEmptyInputHeader')
      }
    }
  }
  
  if(header) { tratamentDataTable.createEmptyInputHeader(header) };
  if(content) { tratamentDataTable.createEmptyRowInputs(content) };
  if(header && content) { tratamentDataTable.createEmptyColumnInputs(content, header) };
  
  const handleInputs = {
    handleHeader: (e) => {
      const index = e.target.id;
      header[index] = e.target.value;
    },

    handleContent: (e) => {
      const indexContent = e.target.className;
      const indexItem = e.target.name;

      const attContent = content;
      attContent[indexContent][indexItem] = e.target.value;
      setContent(attContent);
    }
  }


  return (
    <div>
      <table>
        <thead>
          <tr>
            { 
              header &&
              header.map((name, index) => (
                <th>
                  <input
                    id={index}
                    defaultValue={name}
                    onChange={handleInputs.handleHeader}
                  />
                </th>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            content &&
            content.map((item, index) => (
              <tr>
                {
                  item.map((nameItens, indexItens) => (
                    <td>
                      <input
                        className={index}
                        name={indexItens}
                        defaultValue={nameItens}
                        onChange={handleInputs.handleContent}
                      />
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Table;
