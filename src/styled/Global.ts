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
    --font2: normal normal 500 1rem 'Barlow', sans-serif;
    --font3: normal normal 700 1rem 'Barlow', sans-serif;
    
    //small
    --font-small: normal normal 300 .875rem 'Barlow', sans-serif;
    --font-small1: normal normal 500 1.125rem 'Barlow', sans-serif;
    
    //big
    --big1: normal normal 700 2rem 'Barlow', sans-serif;

    //colors
    //white
    --white:#f1f1f1;
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
    color: #333;

  }
`

export default Global