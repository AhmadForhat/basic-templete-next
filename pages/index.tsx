import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ArrowRight } from 'react-feather'

import Menu from '../components/Menu'
import Title from '../components/Title'
import Text from '../components/Text'
import Button from '../components/Button'

import {Container, ButtonContainer} from '../styles/Home'

interface HomeProps {
  org: any
}

const Home = ({ org } : HomeProps) => {
  const router = useRouter()

  const handleNavigate = (e :any) => {
    e.preventDefault()
    router.push('/question/1')
  }

  return (
    <>
      <Menu />
        <Head>
          <title>Homepage</title>
        </Head>
        <Container>
          <Title
            style={{marginTop:'24px'}}
          >
            Teste de arquétipos
          </Title>
          <Text
            style={{marginTop: '24px'}}
          >
            Cada arquétipo tem a sua força, medo, potências e sua fraqueza. Saber esse pontos são a chave que você precisa buscar não só um maior autoconhecimento mas um maior domínio sobre sí.
          </Text>
          <ButtonContainer>
            <Button
              style={{width: '126px'}}
              onClick={handleNavigate}
            >
              <Text type="button">
                Iniciar o teste
              </Text>
              <ArrowRight size='12px' />
            </Button>
          </ButtonContainer>
        </Container>
    </>
  )
}

export default Home

export const getStaticProps = async () => {
  const url = "https://api.github.com/orgs/rocketseat"
  const getResponse = await fetch(url)
  const data = await getResponse.json()

  return {
    props: {
      org: data,
    }
  }
}
