import React from 'react'

import { TitleComponent } from './styles'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: 'subTitle' | 'normal'
  children: React.ReactNode
}

const Title: React.FC<TitleProps> = ({ children, type, ...props }) => {
  return (
    <TitleComponent type={type} {...props}>
      {children}
    </TitleComponent>
  )
}

export default Title
