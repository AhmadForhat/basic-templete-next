import React from 'react'
import Image from 'next/image'

import Title from '../Title'
import Text from '../Text'

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

import { Container } from './styles'

interface ResultCardProps {
  backgroundColor: string
  imageName: string
  fontColor: string
  category: string
  subtitle: string
  verses: string[]
}

const imageSrc = {
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

const ResultCard: React.FC<ResultCardProps> = ({
  backgroundColor,
  imageName,
  fontColor,
  category,
  subtitle,
  verses
}) => (
  <>
    <Title style={{ marginTop: '24px' }}>Resultado</Title>
    <Container backgroundColor={backgroundColor}>
      <Image
        src={imageSrc[imageName]}
        alt={imageName}
        width="282px"
        height="268px"
      />
      <Title
        style={{ color: fontColor, fontWeight: 'bold', marginTop: '24px' }}
      >
        {`Palestrante ${category}`}
      </Title>
      <Title
        type="subTitle"
        style={{ fontSize: '14px', marginBottom: '12px', color: 'white' }}
      >
        {subtitle}
      </Title>
      <Text style={{ color: 'white' }}>
        <Text
          style={{
            color: 'white',
            marginBottom: '8px',
            fontSize: '14px'
          }}
        >
          Quem sou?
        </Text>
        {verses.map((verse: string) => (
          <Text key={verse} style={{ fontSize: '12px' }}>
            {verse}
          </Text>
        ))}
      </Text>
    </Container>
  </>
)

export default ResultCard
