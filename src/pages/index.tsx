import React, { useState } from 'react'
import Head from 'next/head'

import Menu from '../components/Menu'
import Cards from '../components/Cards'
import Banner from '../components/Banner'

import { Container } from '../styles/Home'
import Modal from '../components/Modal/Modal'
const Home: React.FC = () => {
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const openModal = () => setShowLeadCapture(true)
  const closeModal = () => setShowLeadCapture(false)

  return (
    <>
      <Menu />
      <Head>
        <title>Teste de Arquétipos</title>
      </Head>
      <Container>
        {showLeadCapture && <Modal close={closeModal} />}
        <Banner onClick={openModal} />
        <Cards />
      </Container>
    </>
  )
}

export default Home
