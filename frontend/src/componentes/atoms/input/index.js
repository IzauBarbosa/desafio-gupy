import { useRef } from 'react'
import { Styles } from './styles'

export const Input = ({
  id,
  name,
  type,
  required,
  checked,
  onChange,
  value,
}) => {
  const inputEl = useRef(null)

  return (
    <Styles
      {...{ id, name, type, required, checked }}
      ref={inputEl}
      value={value || ''}
      onChange={() => onChange(inputEl?.current?.value)}
      className="input"
    />
  )
}
