import { colors } from '@burndev-ui/tokens'
import { styled } from './styles'

const Button = styled('button', {
  color: '$gray100',
  borderRadius: '$sm',
  height: '$16',
})

export function App() {
  return <h1 style={{ color: colors.ignite300 }}>Hello World</h1>
}
