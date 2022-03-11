import React, { useContext, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import AppContext from '../context/AppContext';
import { ButtonDownload } from '../styled-components/Table';

function Download() {
  const { header, content, initialDocument } = useContext(AppContext)
  const [readDownload, setReadDownload] = useState(false);
  const [finalDocument, setFinalDocument] = useState([]);

  useEffect(() => {
    if(header && content) {
      setFinalDocument([header, ...content]);
    }
  }, [header, content])

  return (
    <ButtonDownload
      disabled
      data={ readDownload ? finalDocument : initialDocument }
      filename={ 'inteligov-report.csv' }
      onClick={ () => {
        setReadDownload(true);
        setTimeout(() => setReadDownload(false), 2000);
      }}
    >
      Salvar
    </ButtonDownload>
  )
}

export default Download;
