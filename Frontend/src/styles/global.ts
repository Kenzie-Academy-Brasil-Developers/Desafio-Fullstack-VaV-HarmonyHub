import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #E5E1DF;
    --color-primary: #3668BF;
    --color-secondary: #1D3868;
    --color-tertiary: #6287D9;
    --color-quaternary: #B8D2FF;
    --color-card:#2A5296;
    --color-shade300: #132545;
    --color-shade200: #1A2436;
    --color-shade100:##FFFFFF;
    --color-success: #62D98E;
    --color-fail: #B52545;
    --color-warning: #E9D98E;

    --font-size0: 28px;
    --font-size1: 26px;
    --font-size2: 24px;
    --font-size3: 22px;
    --font-size4: 20px;
    --font-size5: 18px;
    --font-size6: 16px;
    --font-size7: 14px;
    --font-size8: 12px;
    --font-size9: 10px;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --radius1: 25px;
    --radius2: 9px;
    --radius3: 5px;
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
