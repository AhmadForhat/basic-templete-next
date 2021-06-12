import React from 'react'
import styled from 'styled-components'

type DivProps = React.HTMLAttributes<HTMLDivElement>

interface ContainerProps extends DivProps {
  backgroundColor: string
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  border-radius: 8px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px;
  flex-direction: column;
  max-width: 100%;
  width: 295px;
  margin-top: 48px;
  align-self: center;
  height: 600px;
  justify-self: center;
`

export const Score = styled.div`
  position: absolute;
  background-color: white;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  top: -20px;
  right: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  border: 2px solid purple;
`

export const ScoreText = styled.p`
  font-size: 16px;
  font-weight: bold;
`
