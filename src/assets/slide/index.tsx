import React, { useRef } from 'react'
import * as S from "./styled"

interface Props{
  src:string
  text:string
  title:string
  current:boolean
}


export const Slide = ({src,text,title,current}:Props) => {

  return (
    <S.Div
      current = {current}
      >
        <S.ImgSlide text={src}/>
      <S.Info text="--font3" fontSize="3rem" ch={18} padding="2rem 3rem">
        <h1>{title}</h1>
        <p>{text}</p>
        <a href="#">shop now</a>
      </S.Info>
    </S.Div>
  )
}
