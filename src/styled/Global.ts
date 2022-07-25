import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
    font: inherit;
  }

  :root{
    //fonts 
    --font: normal normal 300 1rem 'Barlow', sans-serif;
    --font1: normal normal 400 1rem 'Barlow', sans-serif;
    --font2: normal normal 700 1rem 'Barlow', sans-serif;
    
    //small
    --font-small: normal normal 300 .875rem 'Barlow', sans-serif;

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

  html{
    height: 100%;
  }
  body{
    height: 100%;
    font-family: 'Barlow', sans-serif;
  }
  
  /* #root{
    min-height: 100vh;
    min-width: 100%;
    display: flex;
  } */

`

export default Global