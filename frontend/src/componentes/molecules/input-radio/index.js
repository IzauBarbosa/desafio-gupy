import { Input, Label } from '../../atoms'
import { Styles, Group, Radio } from './styles'

export const InputRadio = ({ name, label, onChange, group }) => {
  return (
    <Styles className="input-radio">
      <Label>{label}</Label>
      <Group className="group">
        {(group || []).map((field, index) => {
          const { id, label, value, checked } = field
          return (
            <Radio className="radio" key={`radio-${index}`}>
              <Input {...{ id, name, onChange, value, checked }} type="radio" />
              <Label htmlFor={id}>{label}</Label>
            </Radio>
          )
        })}
      </Group>
    </Styles>
  )
}
