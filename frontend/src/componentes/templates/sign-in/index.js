import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Form } from '../../organisms'
import { Styles } from './styles'

export const SignIn = ({ callback }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Styles>
      <Form
        request={{
          method: 'post',
          context: 'accounts',
          endpoint: 'login',
          data: { email, password },
        }}
        fields={[
          {
            type: 'email',
            id: 'email',
            label: 'Informe seu email',
            value: email,
            onChange: setEmail,
          },
          {
            type: 'password',
            id: 'password',
            label: 'Informe sua senha',
            value: password,
            onChange: setPassword,
          },
        ]}
        {...{ callback }}
      />
      <Link to="/create-account">Cadastre-se</Link>
    </Styles>
  )
}
