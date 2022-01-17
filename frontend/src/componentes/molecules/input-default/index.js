import { Input, Label } from '../../atoms'
import { Styles } from './styles'

export const InputDefault = ({
  id,
  label,
  type,
  required,
  onChange,
  value,
}) => {
  return (
    <Styles className="input-default">
      <Label htmlFor={id}>{label}</Label>
      <Input {...{ id, type, required, onChange, value }} />
    </Styles>
  )
}
