import { Styles } from './styles'

export const Paragraph = ({ size, children }) => {
  return <Styles {...{ size }} className="paragraph">{children}</Styles>
}
