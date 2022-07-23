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
    color: #f0f0f0;
  }
  
  #root{
    min-height: 100vh;
    min-width: 100%;
    display: flex;
  }

`

export default Global