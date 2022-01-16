import { useState } from 'react';
import { requestToAPI } from '../../../services/request';
import { Button } from '../../atoms';
import { InputDefault, InputRadio } from '../../molecules';
import { Styles } from './styles';

export const Form = ({ request, fields, callback  }) => {

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { method, context, endpoint, data } = request;
    const response = await requestToAPI({ 
      method, context, endpoint, data
    }, setLoading);

    callback(response);
  }

  return (
    <Styles onSubmit={handleSubmit}>
      {(fields || []).map((field, index) => {
        const { id, name, label, type, onChange, value, group } = field;

        switch (type) {
          case 'radio':
            return (
              <InputRadio key={`input-radio-${index}`} id={id} name={name} label={label} onChange={onChange} group={group} />
            );
          default:
            return (
              <InputDefault key={`input-default-${index}`} id={id} label={label} type={type} onChange={onChange} value={value} />
            );
        }
      })}
      <Button type="submit" disabled={loading} loading={loading}>Enviar</Button>
    </Styles>
  )
}