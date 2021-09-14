import React, { useEffect, useState } from 'react'
import Card from './Card'
import { CarouselProvider, Slide, Slider } from 'pure-react-carousel'

import arrayCards from '../../utils/arrayCards'
import Title from '../Title'

import { ContainerMain } from './styles'

const Cards: React.FC = () => {
  const [width, setWidth] = useState(null)

  useEffect(() => {
    setWidth(window.screen.width)
  }, [])

  return (
    <ContainerMain>
      <Title
        style={{
          marginTop: '48px',
          textAlign: 'center',
          color: '#3D3D3D'
        }}
        type="subTitle"
      >
        Que tipo de palestrante você é?
      </Title>
      <CarouselProvider
        naturalSlideWidth={width > 600 ? 282 : 244}
        naturalSlideHeight={width > 600 ? 355 : 336}
        totalSlides={arrayCards.length}
        visibleSlides={width > 600 ? 3 : 1}
        step={1}
      >
        <Slider>
          {arrayCards.map((card, index) => (
            <Slide index={index} key={card.subTitle}>
              <Card
                key={card.number}
                number={card.number}
                subTitle={card.subTitle}
                backgroundColor={card.backgroundColor}
                color={card.color}
                text={card.text}
                pathImage={card.pathImage}
              />
            </Slide>
          ))}
        </Slider>
      </CarouselProvider>
    </ContainerMain>
  )
}

export default Cards
