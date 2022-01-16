import { Styles } from './styles';

export const Button = ({ type, onClick, disabled, loading, children }) => {

  return (
    <Styles type={type} onClick={onClick} disabled={disabled} className={`${loading && 'loading'}`}>
      {children}
    </Styles>
  )
}