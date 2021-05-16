import React from 'react'

import {Container, Header, NumberText, SubTitle, Text} from './styles'

interface CardProps {
  number: number;
  svgName: string;
  subTitle: string;
  color: string;
  backgroundColor: string;
  text: string;
}

import Criativo from './images/criativo.svg'
import Amante from './images/amante.svg'
import BoboDaCorte from './images/bobo_da_corte.svg'
import CaraComum from './images/cara_comum.svg'
import ForaDaLei from './images/fora_da_lei.svg'
import Governante from './images/governante.svg'
import Heroi from './images/heroi.svg'
import Inocente from './images/inocente.svg'
import Magico from './images/magico.svg'
import Prestativo from './images/prestativo.svg'
import Sabia from './images/sabia.svg'

const Card = ({
  number,
  subTitle,
  color,
  backgroundColor,
  svgName,
  text
}: CardProps) => {
  const componentSvg  = {
    criativo: Criativo,
    amante: Amante,
    bobo_da_corte: BoboDaCorte,
    cara_comun: CaraComum,
    fora_da_lei: ForaDaLei,
    governante: Governante,
    heroi: Heroi,
    inocente: Inocente,
    magico: Magico,
    prestativo: Prestativo,
    sabia: Sabia,
  }

  const SvgComponent = componentSvg[svgName] || Criativo

  return (
    <Container>
      <Header>
        <SubTitle
          left={true}
          color={backgroundColor}
        >
          ---------
        </SubTitle>
        <NumberText
          backgroundColor={backgroundColor}
          color={color}
        >
          {number}
        </NumberText>
        <SubTitle
          left={false}
          color={backgroundColor}
        >
          {subTitle}
        </SubTitle>
      </Header>
      <SvgComponent
        width='100%'
        style={{marginTop:'-8px'}}
      />
      <Text>
        {text}
      </Text>
    </Container>
  )
}

export default Card
