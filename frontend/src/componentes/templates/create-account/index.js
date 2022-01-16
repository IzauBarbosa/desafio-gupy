import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { setItem, getItem } from '../../../services/localStorage';
import { Form } from '../../organisms';
import { Styles } from './styles';

export const CreateAccount = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('');
  const [formResponse, setFormResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getItem('user');

    if (user) {
      navigate('/jobs/all');
    }
  }, [navigate]);
  
  useEffect(() => {
    if (formResponse?.success) {
      const { data } = formResponse;
      
      setItem('user', data);
      navigate('/jobs/all');
    }
  }, [formResponse, navigate]);

  return (
    <Styles>
      <Form 
        request={{ method: 'post', context: 'accounts', endpoint: 'create-account', data: { name, email, password, type } }}
        fields={[{
          type: 'radio',
          name: 'type',
          label: 'Escolha seu tipo de usuário',
          group: [{
            id: 'type-1',
            label: 'Candidato',
            value: 'candidate'
          }, {
            id: 'type-2',
            label: 'Entrevistador',
            value: 'interviewer'
          }, {
            id: 'type-3',
            label: 'Recrutador',
            value: 'recruiter'
          }],
          onChange: setType
        }, {
          type: 'text',
          id: 'name',
          label: 'Informe seu nome',
          value: name,
          onChange: setName
        }, {
          type: 'email',
          id: 'email',
          label: 'Informe seu email',
          value: email,
          onChange: setEmail
        }, {
          type: 'password',
          id: 'password',
          label: 'Informe sua senha',
          value: password,
          onChange: setPassword
        }]}
        callback={setFormResponse}
      />
      <Link to="/">Voltar</Link>
    </Styles>
  )
}