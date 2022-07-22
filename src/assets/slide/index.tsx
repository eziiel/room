import React, { useRef } from 'react'
import * as S from "./styled"
import DataSlide from "../../../public/json/slide.json"

interface Props{
  src:string
  text :string
}


export const Slide = ({src,text}:Props) => {

  return (
    <S.Div>
      <img src={src} alt="image slide" />
      <S.P>
        {text}
      </S.P>
    </S.Div>
  )
}
