import React from 'react'
import { useRouter } from 'next/dist/client/router'

import Menu from '../../components/Menu'
import ResultCard from '../../components/ResultCard'
import { Container } from '../../styles/Home'

import resultsInfo from '../../utils/resultsInfo'

const Result: React.FC = () => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>...carregando</p>
  }

  return (
    <>
      <Menu />
      <Container>
        <ResultCard {...resultsInfo.boboDaCorte} />
      </Container>
    </>
  )
}

export default Result
