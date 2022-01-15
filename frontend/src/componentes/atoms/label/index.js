import { Styles } from "./styles"

export const Label = ({ inputId, children }) => {

  return (
    <Styles>
      <label htmlFor={inputId}>{children}</label>
    </Styles>
  )
}