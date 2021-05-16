import {Container, StarIcon} from './styles'

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

interface ProgressProps {
  stageList: number[];
}

const Progress = ({stageList}: ProgressProps) => (
  <Container>
    {
      list.map(item => (
        <StarIcon completed={stageList.some(value => value === item)} />
      ))
    }
  </Container>
)

export default Progress
