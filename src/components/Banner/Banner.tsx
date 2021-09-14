import React from 'react'
import { ArrowRight } from 'react-feather'

import Title from '../Title'
import Text from '../Text'
import Button from '../Button'

import { ButtonContainer, Container } from './styles'

interface IBanner {
  onClick: () => void
}

const Banner: React.FC<IBanner> = ({ onClick }) => {
  return (
    <Container>
      <Title style={{ marginTop: '24px' }}>
        Nós temos 12 arquétipos dentro de nós
      </Title>
      <Text style={{ marginTop: '24px' }}>
        Arquétipos são padrões universais baseados em mitos e símbolos. Quanto
        mais você souber sobre os seus arquétipos, mais você aprenderá sobre os
        seus pensamentos, suas ações e suas potências
      </Text>
      <Text style={{ marginTop: '24px' }}>
        Sua jornada e suas experiências desenvolveram alguns arquétipos mais do
        que outros.
      </Text>
      <ButtonContainer>
        <Button style={{ width: '126px' }} onClick={onClick}>
          Iniciar o teste
          <ArrowRight size="12px" />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Banner
