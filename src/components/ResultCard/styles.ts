import React from 'react'
import styled from 'styled-components'

type DivProps = React.HTMLAttributes<HTMLDivElement>

interface ContainerProps extends DivProps {
  backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px;
  flex-direction: column;
  width: 320px;
  margin-top: 48px;
`
