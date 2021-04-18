import React from 'react'
import styled from "styled-components";
import { Menu } from 'react-feather';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Container = styled.div<ContainerProps>`
    display: flex;
    height: 48px;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    background: ${({theme}) => theme.colors.primary};
`

export const IconMenu = styled(Menu)`
  color: ${({theme}) => theme.colors.white};
`
