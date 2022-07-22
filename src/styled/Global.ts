import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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

  body{
    min-height: 100vh;
    background-color: #333;
    color: #f0f0f0;
  }
  
  #root{
    width: 100%;
    min-height: 100vh;
  }

`

export default Global