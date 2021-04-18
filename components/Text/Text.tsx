import {TextComponent} from './styles'

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Conteudo envelopado pelo container */
  type?: 'normal' | 'button'
  /** Conteudo envelopado pelo container */
  children: React.ReactNode
}

const Text = ({ children, type, ...props }: TextProps) => {
  return (
    <TextComponent textType={type} {...props}>
      {children}
    </TextComponent>
  )
}

export default Text
