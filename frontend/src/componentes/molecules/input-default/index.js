import { Input, Label } from '../../atoms';
import { Styles } from './styles';

export const InputDefault = ({ id, label, type, onChange, value }) => {

  return (
    <Styles>
      <Label inputId={id}>{label}</Label>
      <Input 
        id={id} 
        type={type} 
        onChange={onChange} 
        value={value} />
    </Styles>
  )
}