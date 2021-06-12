import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { Container } from './styles'

import Menu from '../../components/Menu'
import ResultCard from '../../components/ResultCard'
import resultsInfo from '../../utils/resultsInfo'

const Result: React.FC = () => {
  const [results, setResults] = useState([])
  const { isFallback } = useRouter()

  useEffect(() => {
    const resultData = JSON.parse(localStorage.getItem('questions'))
    setResults(
      Object.values(resultData)
        // eslint-disable-next-line dot-notation
        .sort((acc, curr) => acc['result'] - curr['result'])
        .reverse()
    )
  }, [])

  if (isFallback) {
    return <p>...carregando</p>
  }

  return (
    <>
      <Menu />
      <Container>
        {results?.map(eachResult => (
          <ResultCard
            key={eachResult}
            {...resultsInfo[eachResult.key]}
            score={eachResult.result}
          />
        ))}
      </Container>
    </>
  )
}

export default Result
