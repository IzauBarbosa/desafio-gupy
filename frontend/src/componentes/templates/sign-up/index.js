import { useState } from 'react'
import { Form } from '../../organisms'
import { Styles } from './styles'

export const SignUp = ({ callback }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('candidate')

  return (
    <Styles className="sign-up">
      <Form
        request={{
          method: 'post',
          context: 'accounts',
          endpoint: 'create-account',
          data: { name, email, password, type },
        }}
        fields={[
          {
            type: 'radio',
            name: 'type',
            label: 'Escolha seu tipo de usuário',
            group: [
              {
                id: 'type-1',
                label: 'Candidato',
                value: 'candidate',
                checked: type === 'candidate',
              },
              {
                id: 'type-2',
                label: 'Entrevistador',
                value: 'interviewer',
                checked: type === 'interviewer',
              },
              {
                id: 'type-3',
                label: 'Recrutador',
                value: 'recruiter',
                checked: type === 'recruiter',
              },
            ],
            onChange: setType,
          },
          {
            type: 'text',
            id: 'name',
            label: 'Informe seu nome',
            value: name,
            required: 'required',
            onChange: setName,
          },
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
            required: 'required',
            value: password,
            onChange: setPassword,
          },
        ]}
        link={{
          to: '/',
          text: 'Voltar'
        }}
        {...{ callback }}
      />
    </Styles>
  )
}
