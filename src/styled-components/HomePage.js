import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html {

  }
`;

const DirectorContainer = styled.div`
  width: 100%;
  max-width: 1256px;
  height: 100%;
  background-color: #11D4A4;
  margin: 70px auto;
  box-shadow: 1px 6px 17px -5px #000000;
  border-radius: 33px;
  padding: 50px 0 50px 0;
`;

const Title = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap');
  font-family: 'Dancing Script', 'cursive';
  font-style: normal;
  font-weight: 700;
  font-size: 51.80px;
  line-height: 45px;
  color: #00664D;
  text-align: center;
`

export {
  GlobalStyle,
  DirectorContainer,
  Title
};