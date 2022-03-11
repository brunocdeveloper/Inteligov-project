import React, { useContext, useEffect, useState } from 'react';
import { CSVLink } from 'react-csv';
import AppContext from '../context/AppContext';

function Download() {
  const { header, content, setContent, initialDocument } = useContext(AppContext)
  const [readDownload, setReadDownload] = useState(false);
  const [finalDocument, setFinalDocument] = useState([]);

  useEffect(() => {
    if(header && content) {
      setFinalDocument([header, ...content]);
    }
  }, [header, content])

  return (
    <div>
      <CSVLink
        disabled
        data={ readDownload ? initialDocument : initialDocument }
        filename={ 'inteligov-report.csv' }
        onClick={ () => {
          setReadDownload(true);
          setTimeout(() => setReadDownload(false), 2000);
        }}
      >
        Baixe o arquivo
      </CSVLink>
    </div>
  )
}

export default Download;
