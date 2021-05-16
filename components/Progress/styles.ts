import styled from "styled-components";
import { Star } from 'react-feather';

interface StarIconProps {
  completed?: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 320px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
`

export const StarIcon = styled(Star)<StarIconProps>`
  color: ${({theme, completed}) => completed ? theme.colors.primary : theme.colors.gray};
`
