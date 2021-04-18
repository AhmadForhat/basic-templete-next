import React from "react"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Conteudo envelopado pelo container */
  children: React.ReactNode
}

const Title = ({ children, ...props }: ContainerProps) => {
  return (
    <p {...props}>
      {children}
    </p>
  )
}

export default Title
