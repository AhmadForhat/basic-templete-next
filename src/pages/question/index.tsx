import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/dist/client/router'
import { ArrowRight } from 'react-feather'
import Progress from '../../components/Progress'
import Menu from '../../components/Menu'
import Text from '../../components/Text'
import Button from '../../components/Button'
import EachQuestion from '../../components/EachQuestion'
import QUESTIONS_DATA from '../../../questions.json'
import { Transition, CSSTransition } from 'react-transition-group'

import { Container, ButtonContainer } from '../../styles/Quetion'
import QuestionWarning from '../../components/QuestionWarning/QuestionWarning'
import { Main } from './styles'

const Question: React.FC = () => {
  const [questions, setQuestions] = useState(QUESTIONS_DATA)
  const [currentPageData, setCurrentPageData] = useState(QUESTIONS_DATA.wise)
  const [questionPage, setQuestionPage] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [currentList, setCurrentList] = useState([0])
  const [goToResult, setGoToResult] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showWarningModal, setShowWarningModal] = useState(false)
  const { isFallback } = useRouter()
  const router = useRouter()
  const [isLastQuestion, setIsLastQuestion] = useState(false)
  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    const currentQuestionKey =
      Object.keys(questions)[Object.keys(questions).length - 1]
    setIsLastQuestion(currentQuestionKey === questionPage)
    setVisibility(true)
  }, [questionPage])

  useEffect(() => {
    setQuestionPage(Object.keys(questions)[0])
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNavigate = (e: any) => {
    e.preventDefault()
    const hasInvalidPontuation = Object.values(currentPageData.questions).some(
      value => value.pontuation === null
    )
    if (hasInvalidPontuation) {
      setShowWarningModal(true)
    }
    if (!hasInvalidPontuation) {
      const resultSum = Math.round(
        Object.values(currentPageData.questions).reduce(
          (curr, prev) => curr + prev.pontuation,
          0
        )
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
      setTimeout(() => {
        setQuestionPage(newQuestionPage[newPage])
        setCurrentPage(newPage)
        setVisibility(false)
        console.warn('alsdfjalsdfj')
      }, 500)
    }
    if (isLastQuestion && !hasInvalidPontuation) {
      const resultSum = Math.round(
        Object.values(currentPageData.questions).reduce(
          (curr, prev) => curr + prev.pontuation,
          0
        )
      )
      setQuestions(prev => ({
        ...prev,
        [questionPage]: {
          ...currentPageData,
          result: resultSum
        }
      }))
      setGoToResult(true)
    }
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
    if (goToResult) {
      localStorage.setItem('questions', JSON.stringify(questions))
      router.push('/result')
    }
  }, [goToResult])

  useEffect(() => {
    setCurrentPageData(QUESTIONS_DATA[questionPage])
  }, [questionPage])

  return (
    <>
      <Menu />
      {Boolean(questions[questionPage]) && (
        <Main>
          <CSSTransition timeout={300} in={visibility} classNames="alert">
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
                  <Text type="button" color={'fff'}>
                    Próximo
                  </Text>
                  <ArrowRight size="12px" />
                </Button>
              </ButtonContainer>
              <Progress
                stageList={currentList}
                questionsList={Object.values(questions)}
              />
            </Container>
          </CSSTransition>
        </Main>
      )}
      {showWarningModal && (
        <QuestionWarning close={() => setShowWarningModal(false)} />
      )}
    </>
  )
}

export default Question
