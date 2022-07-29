import styled, { css } from "styled-components";

interface StatusDropMenu {
  status?: boolean
}

const Header = styled.header`
  width: 500px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 3rem;
  display: flex;
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 4rem;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 600px) {
    width: 100%;
    text-align: center;
    gap: 0;
}
`
const Logo = styled.span`
  font: var(--big1);
  align-self: center;
  color: var(--white);

  @media (max-width: 600px) {
    grid-column: 2;
    justify-self: start;
  }
`
const NavMenu = styled.nav`

  @media (max-width: 600px) {
    display: none;
  }
`
const Ul = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: end;
`
const Li = styled.li`

  a{
  color: var(--white);
  line-height: 3;
  display: inline-block;
  padding: 1rem;
  font: var( --font-small);
  font-weight: bold;
  font-size: 1.3rem;
  }
`

const DropMenu = styled.div`
  width: 50px;
  height: 50px;
  grid-column: 1;
  grid-row: 1;
  margin: 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`

const Span = styled.span`
  content: "";
  width: 100%;
  height: 3px;
  border-radius: 5px;
  background-color: var(--white);
  position: relative;
  
  ::after{
    content: "";
    position: absolute;
    width: 80%;
    height: 3px;
    top: -10px;
    border-radius: 5px;
    background-color: var(--white);
    z-index: 2;
    left: 0;
  }
  
  ::before{
    content: "";
    position: absolute;
    width: 60%;
    height: 3px;
    top: 10px;
    border-radius: 5px;
    background-color: var(--white);
    z-index: 2;
    left: 0;
  }
`
  const NavDrop = styled.nav<StatusDropMenu>`
  
  position: absolute;
  top:110px;
  left: 0;
  width: 150px;
  background: #fff;
  opacity: 0;
  transform: translateX(-150px);
  transition: .5s ease;



  ${props => props.status==true && css`
  opacity: 2;
  transform: initial;
  `}

  ul{
    display: flex;
    flex-direction: column;

    li{

      a{
        font: var( --font-small1);
        color: #333;
        display: inline-block;
        padding: .5rem;
        margin: .5rem;
      }
    }
  }
  
  `

export{
  Header,
  Logo,
  NavMenu,
  Ul,
  Li,
  DropMenu,
  Span,
  NavDrop
}