import React, { ComponentElement } from 'react'
import { Slide } from '../../assets/slide'
import dataSlide from "../../../public/json/slide.json"
import * as S from "./styled"


const Main: React.FC = () => {
  const [guideSlide, setGuideSlide] = React.useState(Number)
  const [move, setMove] = React.useState(0)
  const [teste, setTeste] = React.useState<Number | null>()
  const refMove = React.useRef<HTMLDivElement>(null)



  React.useEffect(() => {
    refMove.current?.clientWidth && setMove(refMove.current?.clientWidth * guideSlide)
  }, [guideSlide])

  const handleMoveRight = () => {
    guideSlide < dataSlide.length-1 && setGuideSlide(guideSlide + 1)
    console.log(guideSlide)
  }
  const handleMoveLeft = () => {
    guideSlide >= 1 && setGuideSlide(guideSlide - 1)
    setTeste(refMove.current?.clientWidth)
  }

  return (
    <S.Container>
      <S.MainS
        ref={refMove}
        move={`-${move}px`}
      >
        {
          dataSlide.map(({ id, src, info }) => (
            <Slide
              key={id}
              text={info}
              src={src}
            />
          ))
        }
      </S.MainS>
        <S.NavSlide>
          <button onClick={handleMoveLeft}>L</button>
          <button onClick={handleMoveRight}>L</button>
        </S.NavSlide>

    </S.Container>
  )
}

export default Main