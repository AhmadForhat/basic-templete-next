import React from 'react'
import styled from 'styled-components'

type DivProps = React.HTMLAttributes<HTMLDivElement>

export const Container = styled.main<DivProps>`
  padding: 0 20px;
`
