import { Styles } from './styles'

export const H2 = ({ size, children }) => {
  return <Styles {...{ size }} className="title">{children}</Styles>
}
