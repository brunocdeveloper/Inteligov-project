import styled from 'styled-components';
import { CSVLink } from 'react-csv';

const DirectorContainerTable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const ContainerTable = styled.div`
  width: 95%;
  max-width:1120px;
  height: 506px;
  background-color: #99FFE5;
  overflow: scroll;
  margin: 30px auto 0;
`;

const HeaderInputs = styled.input`
  box-sizing: border-box;
  width: 146px;
  height: 38px;

  margin: 0;
  padding: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
`;

const ContentInput = styled.input`
  box-sizing: border-box;
  width: 146px;
  height: 38px;

  padding: 4px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

const ButtonDownload = styled(CSVLink)`
  display: inline-block;
  box-sizing: border-box;
  padding: 12px;
  text-decoration: none;
  width: 168px;
  height: 52.28px;
  background: #051066;
  border-radius: 34.85px;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 25.09px;
  color: #FFFFFF;
`;

const ContentButton = styled.div`
  width: 95%;
  max-width:1120px;

  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  margin: auto;
`;

export { 
  ContainerTable,
  HeaderInputs,
  ContentInput,
  ButtonDownload,
  DirectorContainerTable,
  ContentButton
}