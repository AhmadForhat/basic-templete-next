import React, { useState } from 'react'
import {
  Container,
  Title,
  OptionContainer,
  Option,
  OptionNumber
} from './styles'

type EachQuestionProps = {
  title: string
  questionIndex: number
  handleSelection: (pontuation: number, index: string) => void
}

const EachQuestion: React.FC<EachQuestionProps> = ({
  title,
  questionIndex,
  handleSelection
}) => {
  const [selected, setSelected] = useState(null)

  const handlePontuation = (pontuation: number) => {
    handleSelection(pontuation, String(questionIndex))
    setSelected(pontuation)
  }

  return (
    <Container>
      <Title>{title}</Title>
      <OptionContainer>
        <Option selected={selected === 1} onClick={() => handlePontuation(1)}>
          <OptionNumber>1</OptionNumber>
        </Option>

        <Option selected={selected === 2} onClick={() => handlePontuation(2)}>
          <OptionNumber>2</OptionNumber>
        </Option>

        <Option selected={selected === 3} onClick={() => handlePontuation(3)}>
          <OptionNumber>3</OptionNumber>
        </Option>

        <Option selected={selected === 4} onClick={() => handlePontuation(4)}>
          <OptionNumber>4</OptionNumber>
        </Option>

        <Option selected={selected === 5} onClick={() => handlePontuation(5)}>
          <OptionNumber>5</OptionNumber>
        </Option>
      </OptionContainer>
    </Container>
  )
}

export default EachQuestion
