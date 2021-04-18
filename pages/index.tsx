import React from 'react'
import Head from 'next/head'
import { ArrowRight } from 'react-feather'

import Menu from '../components/Menu'
import Title from '../components/Title'
import Text from '../components/Text'
import Button from '../components/Button'

interface HomeProps {
  org: any
}

const Home = ({ org } : HomeProps) => {
  return (
    <>
      <Menu />
      <div>
        <Head>
          <title>Homepage</title>
        </Head>
        <main style={{padding: '0 20px'}}>
          <Title style={{marginTop:'24px'}}>
            Teste de arquétipos
          </Title>
          <Text style={{marginTop: '24px'}}>
            Cada arquétipo tem a sua força, medo, potências e sua fraqueza. Saber esse pontos são a chave que você precisa buscar não só um maior autoconhecimento mas um maior domínio sobre sí.
          </Text>
          <div style={{width: '100%', display: 'flex', justifyContent:"flex-end", marginTop:'24px'}}>
            <Button style={{width: '126px'}}>
              <Text type="button">
                Iniciar o teste
              </Text>
              <ArrowRight size='12px' />
            </Button>
          </div>
        </main>
      </div>
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
