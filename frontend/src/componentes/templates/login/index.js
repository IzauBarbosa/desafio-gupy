import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { setItem } from '../../../services/localStorage';
import { Form } from '../../organisms';
import { Styles } from './styles';

export const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formResponse, setFormResponse] = useState();

  useEffect(() => {
    if (formResponse?.success) {
      const { data } = formResponse;
      
      setItem('user', data);
      // useNavigate('/list-all-jobs')
    }
  }, [formResponse]);

  return (
    <Styles>
      <Form 
        request={{ method: "post", context: "accounts", endpoint: "login", data: { email } }}
        fields={[{
          type: "email",
          id: "email",
          label: "Informe seu email",
          value: email,
          onChange: setEmail
        }, {
          type: "password",
          id: "password",
          label: "Informe sua senha",
          value: password,
          onChange: setPassword
        }]}
        callback={setFormResponse}
      />
      <Link to="/sign-up">Cadastre-se</Link>
    </Styles>
  )
}