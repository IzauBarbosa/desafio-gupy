import { Styles } from './styles';

export const Label = ({ inputId, children }) => {

  return (
    <Styles htmlFor={inputId}>
      {children}
    </Styles>
  )
}