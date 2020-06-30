import { createGlobalStyle } from 'styled-components';

import backgroundImg from './assets/background.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #F0F0F5 url(${backgroundImg}) no-repeat 65% top;
  }

  body, button, input {
    font: 16px Roboto, sans-serif;
  }

  #root{
    margin: 0 auto;
    max-width: 900px;
    padding: 40px 20px;
  }
`;
