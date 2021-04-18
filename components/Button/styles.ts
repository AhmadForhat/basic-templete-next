import React from 'react'
import styled from "styled-components";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const ButtonContainer = styled.button<ButtonProps>`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primaryLight};
    color: ${({theme}) => theme.colors.white};
    width: 100%;
    border-radius: 8px;
    padding: 8px 0;
    border: none;
    outline: none;
`
