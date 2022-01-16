import { Header } from '../../organisms'
import { Styles, Body } from './styles'

export const Archive = ({ children }) => {
  return (
    <Styles>
      <Header />
      <Body>{children}</Body>
    </Styles>
  )
}
