import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #E5E1DF;
    --color-primary: #3668BF;
    --color-secondary: #1D3868;
    --color-tertiary: #6287D9;
    --color-quaternary: #B8D2FF;
    --color-card:#2A5296;
    --color-shading300: #132545;
    --color-shading200: #1A2436;
    --color-shading100:##FFFFFF;
    --color-success: #62D98E;
    --color-fail: #B52545;
    --color-warning: #E9D98E;

    --font-size-0: 28px;
    --font-size-1: 26px;
    --font-size-2: 24px;
    --font-size-3: 22px;
    --font-size-4: 20px;
    --font-size-5: 18px;
    --font-size-6: 16px;
    --font-size-7: 14px;
    --font-size-8: 12px;
    --font-size-9: 10px;
    
    --weight-font-1: 700;
    --weight-font-2: 600;
    --weight-font-3: 500;
    --weight-font-4: 400;

    --radius-size-1: 25px;
    --radius-size-2: 15px;
    --radius-size-3: 5px;
  }  
  * {
    margin:0;
    padding: 0;
    outline:0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace
  }

  body,html{
    width: 100%;
    min-height: 100vh;
  }

  a{
    color: unset;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background-color: #E5E1DF;
  }
  
  button {
    cursor: pointer;
  }
`;
