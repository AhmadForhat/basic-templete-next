import React from 'react'
import styled from 'styled-components'

interface InputProps extends React.InsHTMLAttributes<HTMLInputElement> {
  error: boolean
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.3);
  z-index: 1100;
`

export const ModalContainer = styled.div`
  width: 300px;
  background-color: #1b0418;
  padding: 20px;
  display: flex;
  z-index: 1200;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
`

export const CloseButton = styled.button`
  position: absolute;
  top: -15px;
  right: -15px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  border: none;
  font-size: 18px;
  cursor: pointer;
  color: #1b0418;
`

export const Title = styled.h2`
  width: 134px;
  line-height: 110%;
  font-size: 24px;
  font-family: Poppins, Arial, Helvetica, sans-serif;
  padding-bottom: 8px;
  color: #f5f2eb;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    padding-bottom: 16px;
    color: #f5f2eb;
  }
`

export const Input = styled.input<InputProps>`
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  height: 32px;
  border: 2px solid #${({ error }) => (error ? 'DF4D0E' : 'F5F2EB')};
  background-color: transparent;
  margin-bottom: 8px;
  color: #f5f2eb;
`

export const Button = styled.button`
  border: none;
  background-color: #f5f2eb;
  border-radius: 4px;
  height: 32px;
  color: #1b0418;
  font-size: 18px;
  font-weight: bold;
  font-family: Poppins, Arial, Helvetica, sans-serif;
`
