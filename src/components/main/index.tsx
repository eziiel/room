import React, { ComponentElement } from 'react'
import { Slide } from '../../assets/slide'
import dataSlide from "../../../public/json/slide.json"
import * as S from "./styled"


const Main: React.FC = () => {
  const [current, setCurrent] = React.useState(0)

  //img for btn
  let [{assets:{navSet:{setRight}}}] = dataSlide
  let [{assets:{navSet:{setLeft}}}] = dataSlide
  let [{slide}] = dataSlide


  const handleMoveRight = () => {
    setCurrent(current == slide.length -1? 0 : current +1) 
  }
  const handleMoveLeft = () => {
    setCurrent(current == 0 ? slide.length-1 :current - 1) 
  }

  return (
    <S.Container>
      <S.MainS>
        {
          slide.map(({ id, src, info, title }) => (
            <Slide
              current = {current == id?true:false}
              key={id}
              text={info}
              src={src}
              title={title}
            />
          ))
        }
      </S.MainS>
        <S.NavSlide >
          <S.Button backGround={setLeft} onClick={handleMoveLeft}></S.Button >
          <S.Button backGround={setRight} onClick={handleMoveRight}></S.Button >
        </S.NavSlide>

    </S.Container>
  )
}

export default Main