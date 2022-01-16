import { Styles } from './styles';

export const Container = ({ size, children }) => {

  return (
    <Styles {...{ size }}>
      {children}
    </Styles>
  )
}