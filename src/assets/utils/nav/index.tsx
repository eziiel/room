import React from 'react'
import * as S from "./styled"
import nav from "../../../../public/json/nav.json"
import { ContextStatus } from '../../../context'




const Nav:React.FC = () => {
  const {status,setStatus} = React.useContext(ContextStatus)

  function handleDrop() {
    setStatus(!status)
  }

  return (
    <S.Header>      
      <S.Logo>room</S.Logo>

      <S.NavMenu>
        <S.Ul>
        {nav.map(({id,tag}) =>(
           <S.Li key={id}>
              <a href={`#${tag}`}>{tag}</a>
           </S.Li> 
          ))}
        </S.Ul>
      </S.NavMenu>

      <S.DropMenu
        onClick={handleDrop}>
        <S.Span></S.Span>
        <S.NavDrop status={status}>
          <ul>
          {nav.map(({id,tag}) => (
            <li key={id}>
              <a href={`#${tag}`}>{tag}</a>
            </li>
          ))}
          </ul>
        </S.NavDrop>
      </S.DropMenu>
    </S.Header>
  )
}

export default Nav