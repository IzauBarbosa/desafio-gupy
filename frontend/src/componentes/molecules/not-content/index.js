import { H3 } from '../../atoms'
import { Styles } from './styles'

export const NotContent = ({ text }) => {
  return (
    <Styles className="not-content">
      <H3 size="medium">{text}</H3>
    </Styles>
  )
}
