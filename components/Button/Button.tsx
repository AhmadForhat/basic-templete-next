import {ButtonContainer} from './styles'

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button = ({children, ...props} : ButtonProps) => (
  <ButtonContainer {...props}>
    {children}
  </ButtonContainer>
)

export default Button
