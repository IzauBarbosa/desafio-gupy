import { useRef } from 'react';
import { Styles } from './styles';

export const Input = ({ id, name, type, onChange, value }) => {

  const inputEl = useRef(null);

  return (
    <Styles
      ref={inputEl} 
      id={id}
      name={name} 
      type={type} 
      value={value || ''}
      onChange={() => onChange(inputEl?.current?.value)} />
  )
}