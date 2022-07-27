import React from 'react'
import Nav from '../assets/utils/nav'
import { ContextProvider } from '../context'
import Main from './main'
import Section from './section'
import * as S from "./styled"

const MainPage:React.FC = () => {
  return (
    <S.MainPG>
      <ContextProvider>
        <Nav></Nav>
        <Main></Main>
        <Section></Section>
      </ContextProvider>
    </S.MainPG>
  )
}

export default MainPage