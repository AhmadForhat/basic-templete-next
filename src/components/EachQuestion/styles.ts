import styled from 'styled-components'

interface OptionProp {
  selected: boolean
}

export const Container = styled.div`
  font-size: 16px;
  color: #bfbfbf;
  font-weight: bold;
  width: 280px;
  margin-top: 40px;
`

export const Title = styled.p`
  text-align: center;
  margin-bottom: 16px;
  font-family: 'Poppins' sans-serif;
`

export const OptionContainer = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
`

export const Option = styled.button<OptionProp>`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 3px solid #${({ selected }) => (selected ? '470B3F' : 'BFBFBF')};
  background-color: transparent;
  cursor: pointer;
  color: #${({ selected }) => (selected ? '470B3F' : 'BFBFBF')};
`

export const OptionNumber = styled.p`
  font-weight: bold;
  font-size: 16px;
  font-family: 'Poppins' sans-serif;
`
