import { Styles } from './styles';

export const Button = ({ type, onClick, disabled, loading, children }) => {

  return (
    <Styles {...{ type, onClick, disabled }} className={`${loading && 'loading'}`}>
      {children}
    </Styles>
  )
}