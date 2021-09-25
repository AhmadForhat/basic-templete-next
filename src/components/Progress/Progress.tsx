import React, { useEffect, useState } from 'react'
import { Container, StarIcon } from './styles'

interface ProgressProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  questionsList: any[]
  stageList: number[]
}

const Progress: React.FC<ProgressProps> = ({ stageList, questionsList }) => {
  const [list, setList] = useState([])
  useEffect(() => {
    const updatedList = questionsList.map((_, index) => index)
    setList(updatedList)
  }, [stageList])

  return (
    <Container>
      {list.map((item, index) => (
        <StarIcon
          key={index}
          completed={stageList.some(value => value === item + 1)}
        />
      ))}
    </Container>
  )
}

export default Progress
