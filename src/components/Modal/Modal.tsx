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
  const [age, setAge] = useState(null)
  const [ageError, setAgeError] = useState(false)
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

  const handleAgeChange = (event: React.FormEvent<HTMLInputElement>) => {
    const value = (event.target as HTMLInputElement).value.trim()
    const valueDataType = Number(value) === Number(value) * 1
    const valueRange = Number(value) > 10 && Number(value) < 100
    if (value && valueDataType && valueRange) {
      setAge(value)
      setAgeError(false)
    } else setAgeError(true)
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
        await addLead({ name, email, age })
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
          <Input
            type="text"
            placeholder="Idade"
            onChange={handleAgeChange}
            error={ageError}
          />
          <Button type="submit">Enviar</Button>
        </Form>
      </ModalContainer>
    </Container>
  )
}

export default Modal
