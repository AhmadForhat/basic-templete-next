import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { ArrowRight } from 'react-feather'
import Progress from '../../components/Progress'
import Menu from '../../components/Menu'
import Text from '../../components/Text'
import Button from '../../components/Button'
import EachQuestion from '../../components/EachQuestion'
import QUESTIONS_DATA from '../../../questions.json'

import { Container, ButtonContainer } from './styles'

const Question: React.FC = () => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA)
  const [currentPageData, setCurrentPageData] = useState(QUESTIONS_DATA.wise)
  const [questionPage, setQuestionPage] = useState('wise')
  const [currentPage, setCurrentPage] = useState(0)
  const [currentList, setCurrentList] = useState([0])
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hasInvalidPontuation, setHasInvalidPontuation] = useState(false)
  const { isFallback } = useRouter()
  const router = useRouter()

  const handleNavigate = (e: any) => {
    e.preventDefault()
    const hasInvalidPontuation = Object.values(currentPageData.questions).some(
      value => value.pontuation === null
    )
    if (hasInvalidPontuation) {
      console.warn('preencha novamente a questao ', currentPageData.questions)
    }
    if (!hasInvalidPontuation) {
      const resultSum = Math.round(
        Object.values(currentPageData.questions).reduce(
          (curr, prev) => curr + prev.pontuation,
          0
        ) * 3.3333
      )
      const newPage = currentPage + 1
      setCurrentList(prev => [...prev, newPage])
      const newQuestionPage = Object.keys(questions)
      setQuestions(prev => ({
        ...prev,
        [questionPage]: {
          ...currentPageData,
          result: resultSum
        }
      }))
      setQuestionPage(newQuestionPage[newPage])
      setCurrentPage(newPage)
    }
    if (questionPage === 'lover' && !hasInvalidPontuation) {
      const resultSum = Math.round(
        Object.values(currentPageData.questions).reduce(
          (curr, prev) => curr + prev.pontuation,
          0
        ) * 3.3333
      )
      setQuestions(prev => ({
        ...prev,
        [questionPage]: {
          ...currentPageData,
          result: resultSum
        }
      }))

      localStorage.setItem('questions', JSON.stringify(questions))

      router.push('/result/1')
    }
    setHasInvalidPontuation(true)
  }

  const handleSelectedQuestion = (pontuation: number, item: string) => {
    setCurrentPageData({
      ...currentPageData,
      questions: {
        ...currentPageData.questions,
        [item]: {
          ...currentPageData.questions[item],
          pontuation: pontuation
        }
      }
    })
  }

  if (isFallback) {
    return <p>...carregando</p>
  }

  useEffect(() => {
    setCurrentPageData(QUESTIONS_DATA[questionPage])
  }, [questionPage])

  return (
    <>
      <Menu />
      {Boolean(questions[questionPage]) && (
        <Container>
          {Object.values(questions[questionPage]?.questions).map(
            ({ question }, index) => (
              <EachQuestion
                title={question}
                key={question}
                questionIndex={index}
                handleSelection={handleSelectedQuestion}
              />
            )
          )}
          <ButtonContainer>
            <Button
              style={{ width: '280px', height: '40px' }}
              onClick={handleNavigate}
            >
              <Text type="button">Próximo</Text>
              <ArrowRight size="12px" />
            </Button>
          </ButtonContainer>
          <Progress stageList={currentList} />
        </Container>
      )}
    </>
  )
}

export default Question
