import React, { ComponentElement } from 'react'
import { Slide } from '../../assets/slide'
import dataSlide from "../../../public/json/slide.json"
import * as S from "./styled"
import { ContextStatus } from '../../context'


const Main: React.FC = () => {
  const [guideSlide, setGuideSlide] = React.useState(0)
  const [move, setMove] = React.useState(0)
  const refMove = React.useRef<HTMLDivElement>(null)
  const {setStatus} = React.useContext(ContextStatus)

  //img for btn
  let [{assets:{navSet:{setRight}}}] = dataSlide
  let [{assets:{navSet:{setLeft}}}] = dataSlide


  React.useEffect(() => {
    refMove.current?.clientWidth && setMove(-(refMove.current?.clientWidth * guideSlide))
    refMove.current?.clientWidth && refMove.current?.clientWidth>600?setStatus(false):null
  }, [guideSlide])





  const handleMoveRight = () => {
    guideSlide < dataSlide[0].slide.length-1 && setGuideSlide(guideSlide => guideSlide + 1)
  }
  const handleMoveLeft = () => {
    guideSlide >= 1 && setGuideSlide(guideSlide => guideSlide - 1)
  }

  return (
    <S.Container>
      <S.MainS
        ref={refMove}
        move={`${move}px`}
      >
        {
          dataSlide[0].slide.map(({ id, src, info, title }) => (
            <Slide
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