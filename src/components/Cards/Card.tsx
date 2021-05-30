/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import Image from 'next/image'
import { Container, Header, NumberText, SubTitle, Text } from './styles'

import sabia from '../../assets/sabia.png'
import caraComum from '../../assets/cara_comum.png'
import criativo from '../../assets/criativo.png'
import foraDaLei from '../../assets/fora_da_lei.png'
import inocente from '../../assets/inocente.png'
import heroi from '../../assets/heroi.png'
import governante from '../../assets/governante.png'
import magico from '../../assets/magico.png'
import prestativo from '../../assets/prestativo.png'
import explorador from '../../assets/explorador.png'
import boboDaCorte from '../../assets/bobo_da_corte.png'
import amante from '../../assets/amante.png'

interface CardProps {
  number: number
  subTitle: string
  color: string
  backgroundColor: string
  text: string
  pathImage: string
}

const imageName = {
  sabia,
  caraComum,
  criativo,
  foraDaLei,
  inocente,
  heroi,
  governante,
  magico,
  prestativo,
  explorador,
  boboDaCorte,
  amante
}

const Card: React.FC<CardProps> = ({
  number,
  subTitle,
  color,
  backgroundColor,
  text,
  pathImage
}) => {
  return (
    <Container>
      <Header>
        <SubTitle left={true} color={backgroundColor}>
          ---------
        </SubTitle>
        <NumberText backgroundColor={backgroundColor} color={color}>
          {number}
        </NumberText>
        <SubTitle left={false} color={backgroundColor}>
          {subTitle}
        </SubTitle>
      </Header>
      <div style={{ marginTop: '-8px' }}>
        <Image
          src={imageName[pathImage]}
          alt={pathImage}
          width="282px"
          height="262px"
        />
      </div>
      <Text>{text}</Text>
    </Container>
  )
}

export default Card
