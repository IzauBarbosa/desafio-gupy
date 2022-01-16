import { Styles } from './styles'

export const Label = ({ htmlFor, children }) => {
  return <Styles {...{ htmlFor }}>{children}</Styles>
}
