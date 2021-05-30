import React from 'react'
import { TextComponent } from './styles'

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'normal' | 'button'
  children: React.ReactNode
}

const Text: React.FC<TextProps> = ({ children, type, ...props }) => {
  return (
    <TextComponent textType={type} {...props}>
      {children}
    </TextComponent>
  )
}

export default Text
