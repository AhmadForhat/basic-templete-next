import styled from 'styled-components'

export const main = styled.div`
  margin: 0 auto;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  margin: 0 20px;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  gap: 1em;

  @media (max-width: 1300px) {
    grid-template-columns: 33% 33% 33%;
  }

  @media (max-width: 1080px) {
    grid-template-columns: 50% 50%;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`