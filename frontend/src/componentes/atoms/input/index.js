import { useRef } from 'react'
import { Styles } from './styles'

export const Input = ({ id, name, type, onChange, value }) => {
  const inputEl = useRef(null)

  return (
    <Styles
      {...{ id, name, type }}
      ref={inputEl}
      value={value || ''}
      onChange={() => onChange(inputEl?.current?.value)}
    />
  )
}
