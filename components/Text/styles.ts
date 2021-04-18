import React from 'react'
import styled from "styled-components";

interface TextProps  extends React.HTMLAttributes<HTMLDivElement> {
  textType?: string
}

export const TextComponent = styled.p<TextProps>`
  font-family: 'Roboto', sans-serif;
  font-size: ${({
      theme,
      textType
    }) => textType ==='body'
    ? theme.font.size.bodyText
    : theme.font.size.buttonText
  };
  font-weight: ${({
      theme,
      textType
    }) => textType ==='body'
      ? theme.font.weight.normal
      : theme.font.weight.bold
    };
`
