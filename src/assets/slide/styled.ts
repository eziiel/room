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
  background: blue;
  position: relative;
`

const ImgSlide = styled.div<Props>`
  width: 100%;
  height: 100%;
  background: transparent url(${props => props.text}) no-repeat;
  background-size: cover;
  background-position: center;

`

const P = styled.p`
  background: green;
  max-width: 100%;
  height: 100%;
`

export {
  Div,
  P,
  ImgSlide,
}