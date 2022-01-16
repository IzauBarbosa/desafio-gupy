import { Input, Label } from '../../atoms';
import { Styles } from './styles';

export const InputDefault = ({ id, label, type, onChange, value }) => {

  return (
    <Styles>
      <Label htmlFor={id}>{label}</Label>
      <Input 
        {...{ id, type, onChange, value }} />
    </Styles>
  )
}