import { Span } from '../span'
import { Styles } from './styles'

export const Button = ({
  type,
  onClick,
  disabled,
  loading,
  children,
  theme,
}) => {
  return (
    <Styles
      {...{ type, onClick, disabled }}
      className={`button ${theme || 'primary'} ${loading ? 'loading' : ''} `}
    >
      <Span>{children}</Span>
    </Styles>
  )
}
