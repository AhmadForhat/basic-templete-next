import React from 'hoist-non-react-statics/node_modules/@types/react'
import styled from 'styled-components'

type DivProps = React.HTMLAttributes<HTMLDivElement>
type TextPrps = React.HTMLAttributes<HTMLParagraphElement>

interface PropsSubtitle extends TextPrps {
  color: string
  left: boolean
}

interface PropsNumberText {
  color: string
  backgroundColor: string
}

export const ContainerCards = styled.div<DivProps>`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 42px 0;
`
export const Container = styled.div<DivProps>`
  width: 282px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.39);
  margin: 0 auto;
  background-color: #fffeff;
  margin: 24px 12px;
  padding: 12px;
`

export const Header = styled.div<DivProps>`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const NumberText = styled.p<PropsNumberText>`
  border-radius: 200px;
  width: 32px;
  height: 32px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  z-index: 2000;
  font-size: 22px;
`

export const SubTitle = styled.p<PropsSubtitle>`
  font-size: 10px;
  display: flex;
  justify-content: ${({ left }) => (left ? 'flex-start' : 'flex-end')};
  align-items: center;
  color: ${({ color }) => color};
  margin-bottom: 12px;
  width: 120px;
`

export const Text = styled.p<TextPrps>`
  text-align: center;
  font-size: 12px;
  margin: 12px 0;
`
