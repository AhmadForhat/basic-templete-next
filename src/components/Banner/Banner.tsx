import React from 'react'
import { ArrowRight } from 'react-feather'
import { useRouter } from 'next/router'

import Title from '../Title'
import Text from '../Text'
import Button from '../Button'

import { ButtonContainer, Container } from './styles'

const Banner: React.FC = () => {
  const router = useRouter()

  const handleNavigate = (e: any) => {
    e.preventDefault()
    router.push('/question/1')
  }

  return (
    <Container>
      <Title style={{ marginTop: '24px' }}>Teste de arquétipos</Title>
      <Text style={{ marginTop: '24px' }}>
        Cada arquétipo tem a sua força, medo, potências e sua fraqueza. Saber
        esse pontos são a chave que você precisa buscar não só um maior
        autoconhecimento mas um maior domínio sobre sí.
      </Text>
      <ButtonContainer>
        <Button style={{ width: '126px' }} onClick={handleNavigate}>
          Iniciar o teste
          <ArrowRight size="12px" />
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default Banner
