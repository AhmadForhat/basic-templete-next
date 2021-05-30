import React from 'react'
import styled from 'styled-components'

type DivProps = React.HTMLAttributes<HTMLDivElement>

export const ButtonContainer = styled.div<DivProps>`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 24px;

  @media (min-width: 600px) {
    justify-content: flex-start;
  }
`

export const Container = styled.div<DivProps>`
  width: 100%;

  @media (min-width: 600px) {
    width: 50%;
    margin: 0 auto;
  }
`
