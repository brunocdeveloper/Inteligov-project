import React, { useContext } from 'react';
import Download from '../components/Download';
import InputFile from '../components/InputFile';
import Table from '../components/Table';
import AppContext from '../context/AppContext';
import { DirectorContainer, GlobalStyle, Title } from '../styled-components/HomePage';
import { ContainerTable, ContentButton, DirectorContainerTable } from '../styled-components/Table';

function HomePage() {
  const { renderTable } = useContext(AppContext);
  return (
    <div>
      <GlobalStyle />
      <DirectorContainer>
        <Title>BEM VINDO!</Title>
        <InputFile />
        {
          renderTable &&
          <DirectorContainerTable>
            <ContentButton>
              <Download />
            </ContentButton>
            <ContainerTable>
              <Table/>
            </ContainerTable>
          </DirectorContainerTable>
        }
      </DirectorContainer>
    </div>
  )
}

export default HomePage;
