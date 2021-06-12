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
      <Title style={{ marginTop: '24px' }}>Teste de arquétipos</Title>
      <Text style={{ marginTop: '24px' }}>
        Cada arquétipo tem a sua força, medo, potências e sua fraqueza. Saber
        esse pontos são a chave que você precisa buscar não só um maior
        autoconhecimento mas um maior domínio sobre sí.
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
