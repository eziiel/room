import styled from "styled-components";

interface Props{
  text :string
}
interface Move{
  move :string
}

const Div = styled.div`
  width: 100%;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: 3fr 2fr;
  position: relative;
`

const ImgSlide = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: transparent url(${props => props.text}) no-repeat;
  background-size: cover;
  background-position: center;

`

const Info = styled.article`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;

  width: 80%;
  height: 100%;
  /* padding: 0 5rem; */
  
  h1{
    font: bold;
    font-size: 3rem;
    max-width: 20ch;
  }
  
  a{
    display: inline-block;
    padding: 2;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    letter-spacing: .875rem;
    text-transform: uppercase;
  }
  
  p{
    max-width: 60ch;
  }

`

export {
  Div,
  Info,
  ImgSlide,
}