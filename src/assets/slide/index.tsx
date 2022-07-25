import React, { useRef } from 'react'
import * as S from "./styled"
import DataSlide from "../../../public/json/slide.json"

interface Props{
  src:string
  text:string
  title:string
}


export const Slide = ({src,text,title}:Props) => {

  return (
    <S.Div>
        <S.ImgSlide text={src}/>
      <S.Info text="--font2" fontSize="3rem" ch={18} padding="2rem 3rem">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="#">shop now</a>
      </S.Info>
    </S.Div>
  )
}
