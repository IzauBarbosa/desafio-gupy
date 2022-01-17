import { Styles } from './styles'

export const H1 = ({ size, children }) => {
  return <Styles {...{ size }} className="title">{children}</Styles>
}
