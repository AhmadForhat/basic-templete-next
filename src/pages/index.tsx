import React from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'
import Cards from '../components/Cards'
import Banner from '../components/Banner'

import { Container } from '../styles/Home'
const Home: React.FC = () => {
  return (
    <>
      <Menu />
      <Head>
        <title>Homepage</title>
      </Head>
      <Container>
        <Banner />
        <Cards />
      </Container>
    </>
  )
}

export default Home
