import React from 'react'
import * as S from "./styled"
import * as C from "../../assets/slide/styled"
import data from "../../../public/json/slide.json"



const Section:React.FC = () => {

  const [{info}] = data

  return (
    <>
      {info.map(({id,src,title,text}) =>(
        <S.SectionS key={id}>

      <C.ImgSlide text={src[0]}></C.ImgSlide>
        <C.Info text="--font2" fontSize="1.5rem" letterspacing="3px" padding="2rem 1rem">
          <h1>{title}</h1>
          <p>{text}</p>
        </C.Info>
      <C.ImgSlide text={src[1]}></C.ImgSlide>


      </S.SectionS>
      ))}
    </>
  )
}

export default Section