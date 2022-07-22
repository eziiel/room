import React from 'react'
import Nav from '../assets/utils/nav'
import Main from './main'
import Section from './section'
import * as S from "./styled"

const MainPage:React.FC = () => {
  return (
    <S.MainPG>
      <Main></Main>
      <Section></Section>
    </S.MainPG>
  )
}

export default MainPage