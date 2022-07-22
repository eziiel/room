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
  grid-template-columns: 55% 45%;
  background: blue;
  position: relative;
`

const P = styled.p`
  background: green;
  width: 100%;
  height: 100%;
`

export {
  Div,
  P,
}