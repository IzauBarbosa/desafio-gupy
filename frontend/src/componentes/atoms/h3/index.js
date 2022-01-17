import { Styles } from './styles'

export const H3 = ({ size, children }) => {
  return <Styles {...{ size }} className="title">{children}</Styles>
}
