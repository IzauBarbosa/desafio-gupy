import { useState } from 'react'
import { Logo } from '../../atoms'
import { Form } from '../../organisms'
import { Styles, Header, Body } from './styles'

export const SignIn = ({ callback }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <Styles className="sign-in">
      <Header>
        <Logo color="primary" />
      </Header>
      <Body>
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
              required: 'required',
              onChange: setEmail,
            },
            {
              type: 'password',
              id: 'password',
              label: 'Informe sua senha',
              value: password,
              required: 'required',
              reset: true,
              onChange: setPassword,
            },
          ]}
          link={{
            to: '/create-account',
            text: 'Cadastre-se',
          }}
          {...{ callback }}
        />
      </Body>
    </Styles>
  )
}
