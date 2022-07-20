import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
    border: 0;
    font: inherit;

  }

  img{
    display: block;
    border-style: none;
  }
  ol,ul{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
/* 
  html{
    min-height: 100vh;
  } */

  body{
    min-height: 100vh;
    background-color: #333;
  }
  
  #root{
    width: 100%;
    min-height: 100vh;
  }

`

export default Global