import React from 'react'
import styled from 'styled-components'

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  textType?: string
  color?: string
}

export const TextComponent = styled.p<TextProps>`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme, color }) => color || theme.colors.text};
  font-size: ${({ theme, textType }) =>
    textType === 'button'
      ? theme.font.size.buttonText
      : theme.font.size.bodyText};
  font-weight: ${({ theme, textType }) =>
    textType === 'button' ? theme.font.weight.bold : theme.font.weight.normal};

  @media (min-width: 600px) {
    font-size: 16px;
  }
`
