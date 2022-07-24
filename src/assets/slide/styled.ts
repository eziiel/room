import styled from "styled-components";

interface Props{
  text :string
  padding?:string
  fontSize? :string
  letterspacing? :string
  ch?:number
}
interface Move{
  move :string
}
interface CH {
  ch:number
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

const Info = styled.article<Props>`
  justify-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 2rem;

  width: 90%;
  height: 100%;
  padding: ${props => props.padding};
  
  h1{
    font: var(${props => props.text});
    font-size:${props => props.fontSize};
    max-width: ${props => props.ch};
    letter-spacing: ${props => props.letterspacing};
  }
  
  a{
    display: inline-block;
    padding: 2;
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font: var(--font2);
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