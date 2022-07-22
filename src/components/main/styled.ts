import styled from "styled-components";


interface Move{
  move :string
}

const MainS = styled.main<Move>`
  min-height: 50vh;
  background-color: red;
  display: flex;
  transform: translate3d(${props => props.move},0,0);
  max-width: 100%;
`

const NavSlide = styled.div<Move>`
  width: 11.66%;
  height: 80px;
  background: #000;
  left: 1500px;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 45vh;
  left: 55%;
  
  button{
    width: 45%;
    cursor: pointer;
  }
  `

  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `

export {
  MainS,
  NavSlide,
  Container,  
}
