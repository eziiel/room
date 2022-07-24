import styled from "styled-components";


interface Move{
  move :string
}

const Container = styled.div`
  max-width: 100%;
  flex-grow: 2;
  display: flex;
  flex-direction: column; 
  align-items: center;
  position: relative;
  `

const MainS = styled.main<Move>`
  height: 100%;
  display: flex;
  transform: translate3d(${props => props.move},0,0);
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
  
  button{
    flex: 1;
    cursor: pointer;
  }
  `


export {
  MainS,
  NavSlide,
  Container,  
}
