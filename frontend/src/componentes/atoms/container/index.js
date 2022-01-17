import { Styles } from './styles'

export const Container = ({ size, children }) => {
  return <Styles {...{ size }} className="container">{children}</Styles>
}
