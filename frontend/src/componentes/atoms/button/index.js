import { Styles } from "./styles"

export const Button = ({ type, onClick, disabled, loading, children }) => {

  return (
    <Styles className={`${loading ? "loading-active" : ""}`}>
      <button type={type} onClick={onClick} disabled={disabled}>{children}</button>
    </Styles>
  )
}