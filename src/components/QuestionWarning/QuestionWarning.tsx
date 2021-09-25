import React from 'react'
import { Container, ModalContainer, CloseButton, Title } from './styles'

interface IModal {
  close: () => void
}

const QuestionWarning: React.FC<IModal> = ({ close }) => {
  return (
    <Container>
      <ModalContainer>
        <CloseButton onClick={close}>&#10006;</CloseButton>
        <Title>É necessário responder todas as questões</Title>
      </ModalContainer>
    </Container>
  )
}

export default QuestionWarning
