import React from 'react'
import styled from "styled-components";

interface TitleProps  extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: string
}

export const TitleComponent = styled.p<TitleProps>`
  font-family: 'Poppins', sans-serif;
  font-size: ${({
      theme,
      type
    }) => type ==='subTitle'
    ? theme.font.size.subTitle
    : theme.font.size.title
  };
  font-weight: ${({theme}) => theme.font.weight.normal};
  color: ${({
      theme,
      type
    }) => type ==='subTitle'
    ? theme.colors.gray
    : theme.colors.primary
  };
`
