import React, { useContext } from 'react';
import Download from '../components/Download';
import InputFile from '../components/InputFile';
import Table from '../components/Table';
import AppContext from '../context/AppContext';

function HomePage() {
  const { renderTable } = useContext(AppContext);
  return (
    <div>
      <h1>BEM VINDO!</h1>
      <InputFile />
      { renderTable && <Download /> }
      { renderTable && <Table/> }
    </div>
  )
}

export default HomePage;
