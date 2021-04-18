import React from "react"

import {TitleComponent} from './styles'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Conteudo envelopado pelo container */
  type?: 'subTitle' | 'normal'
  /** Conteudo envelopado pelo container */
  children: React.ReactNode
}

const Title = ({ children, type, ...props }: TitleProps) => {
  return (
    <TitleComponent type={type} {...props}>
      {children}
    </TitleComponent>
  )
}

export default Title
