import styled from "styled-components";

interface Props {
  backGround?:string
}
interface Move{
  move? :string
}

const Container = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  
  @media (max-width: 980px) {
    height: 770px;
  };

  @media (max-width: 600px) {
    height: 1010px;
  }
  @media (max-width: 430px) {
    height: 1050px;
  }
`

const MainS = styled.main<Move>`
  flex: 1;
  width: 100%;
  display: flex;
  transition: transform .3s ease;
  height: 100%;
`

const NavSlide = styled.div`
  width: 6.65%;
  height: 10%;
  left: 1500px;
  display: flex;
  position: absolute;
  bottom: -1px;
  bottom: 0;
  left: 60%;
  background: #000;

  @media (max-width: 1100px) {
    left: 85%;
    width: 15%;
    right: 0;
    
  }
`
const Button=styled.button<Props>`
  background: #000 url(${props => props.backGround}) no-repeat center center;
  flex: 1;
  cursor: pointer;
`




export {
  MainS,
  NavSlide,
  Container,  
  Button
}
