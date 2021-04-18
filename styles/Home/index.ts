import React from 'react'
import styled from "styled-components";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = styled.main<DivProps>`
    padding: 0 20px;
`

export const ButtonContainer = styled.div<DivProps>`
  width: 100%;
  display: flex;
  justify-content:flex-end;
  margin-top:24px;
`
