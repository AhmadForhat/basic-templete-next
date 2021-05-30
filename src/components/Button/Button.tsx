import React from 'react'
import { ButtonContainer } from './styles'

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <ButtonContainer {...props}>{children}</ButtonContainer>
)

export default Button
