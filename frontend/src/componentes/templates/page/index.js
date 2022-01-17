import { Header } from '../../organisms'
import { Styles, Body } from './styles'

export const Page = ({ children }) => {
  return (
    <Styles className="page">
      <Header />
      <Body className="body">{children}</Body>
    </Styles>
  )
}
