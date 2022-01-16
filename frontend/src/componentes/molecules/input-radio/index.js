import { Input, Label } from '../../atoms';
import { Styles, Radio } from './styles';

export const InputRadio = ({ name, label, onChange, group }) => {

  return (
    <Styles>
      <Label>{label}</Label>
      {(group || []).map((field, index) => {
        
        const { id, label, value } = field;
        return (
          <Radio key={`radio-${index}`}>
            <Input 
              {...{ id, name, onChange, value }}
              type="radio" />
            <Label htmlFor={id}>{label}</Label>
          </Radio>
        )
      })}
    </Styles>
  )   
}