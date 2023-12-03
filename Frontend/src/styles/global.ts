import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-background: #E5E1DF;
    --color-primary: #3668BF;
    --color-secondary: #1D3868;
    --color-tertiary: #6287D9;
    --color-shade300: #132545;
    --color-shade200: #0A0A0A;
    --color-shade100:##FFFFFF;
    --color-success: #62D98E;
    --color-fail: #B52545;
    --color-warning: #E9D98E;
    
    --weight1: 700;
    --weight2: 600;
    --weight3: 500;
    --weight4: 400;

    --font-size0: 26px;
    --font-size1: 24px;
    --font-size2: 22px;
    --font-size3: 20px;
    --font-size4: 18px;
    --font-size5: 16px;
    --font-size6: 14px;
    --font-size7: 12px;
    --font-size8: 10px;
    --font-size9: 9px;

    --radius1: 16px;
    --radius2: 8px;
    --radius3: 4px;
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
