import { Header } from '../../organisms'
import { Styles, Body } from './styles'

export const Single = ({ children }) => {
  return (
    <Styles>
      <Header />
      <Body>{children}</Body>
    </Styles>
  )
}
