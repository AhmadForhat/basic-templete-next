import React from 'react'
import Card from './Card'

import arrayCards from '../../utils/arrayCards'
import Title from '../Title'

import { ContainerCards } from './styles'

const Cards: React.FC = () => (
  <>
    <Title style={{ marginTop: '48px', textAlign: 'center' }} type="subTitle">
      Que tipo de palestrante você é?
    </Title>
    <ContainerCards>
      {arrayCards.map(
        ({ number, subTitle, backgroundColor, color, text, pathImage }) => (
          <Card
            key={number}
            number={number}
            subTitle={subTitle}
            backgroundColor={backgroundColor}
            color={color}
            text={text}
            pathImage={pathImage}
          />
        )
      )}
    </ContainerCards>
  </>
)

export default Cards
