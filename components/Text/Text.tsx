import {TextComponent} from './styles'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Conteudo envelopado pelo container */
  textType?: string
  /** Conteudo envelopado pelo container */
  children: React.ReactNode
}

const Text = ({ children, textType, ...props }: ContainerProps) => {
  return (
    <TextComponent textType={textType} {...props}>
      {children}
    </TextComponent>
  )
}

export default Text
