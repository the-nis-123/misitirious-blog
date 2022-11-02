import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  :root{
    --primary-color: #ff0000;
    --main-background-color: #fafafa;
    --secondary-color: #ffffff;
    --primary-icons-color: #ffffff;
    --secondary-icons-color: #ffffff;
  }

  *,::before, ::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
  }

  #root{
    font-family: 'Signika';
    min-height: 100vh;
    width: 100%;
    overflow-y: auto;
    background-color: #f2f2f2;
    user-select: none; 
  }

  ::-webkit-scrollbar{
    display: none;
    background: #0a000a;
  }

  .hide-on-small-screens{
    display: none;
  }
`;


