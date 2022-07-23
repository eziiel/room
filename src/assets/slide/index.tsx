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
        <S.ImgSlide text={src}/>
      <S.P>
        {text}
      </S.P>
    </S.Div>
  )
}
