import { useRouter } from 'next/dist/client/router'
import React, { useState } from 'react'
import { addLead } from '../../services/addLead'
import {
  Container,
  ModalContainer,
  CloseButton,
  Title,
  Form,
  Input,
  Button
} from './styles'

const EMAIL_VALIDATION =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

interface IModal {
  close: () => void
}

const Modal: React.FC<IModal> = ({ close }) => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [nameError, setNameError] = useState(false)
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(false)

  const handleNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    const nameValue = (event.target as HTMLInputElement).value.trim()
    if (nameValue) {
      setName(nameValue)
      setNameError(false)
    } else setNameError(true)
  }

  const handleEmailChange = (event: React.FormEvent<HTMLInputElement>) => {
    const emailValue = (event.target as HTMLInputElement).value.trim()
    if (EMAIL_VALIDATION.test(emailValue)) {
      setEmail(emailValue)
      setEmailError(false)
    } else setEmailError(true)
  }

  const handleSubmit = async event => {
    event.preventDefault()
    if (!nameError && !emailError) {
      try {
        await addLead({ name, email })
      } catch (error) {
        console.error(error)
      } finally {
        router.push('/question')
      }
    }
  }

  return (
    <Container>
      <ModalContainer>
        <CloseButton onClick={close}>&#10006;</CloseButton>
        <Title>
          Qual <br /> o seu arquétipo?
        </Title>
        <Form onSubmit={handleSubmit}>
          <p>Cadastre-se e descubra</p>
          <Input
            type="text"
            placeholder="Nome"
            onChange={handleNameChange}
            error={nameError}
          />
          <Input
            type="text"
            placeholder="E-mail"
            onChange={handleEmailChange}
            error={emailError}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </ModalContainer>
    </Container>
  )
}

export default Modal
