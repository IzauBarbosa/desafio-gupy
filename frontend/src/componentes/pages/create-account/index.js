import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setItem, getItem } from '../../../services'
import { Container } from '../../atoms'
import { SignUp } from '../../templates'
import { Styles } from './styles'

export const CreateAccount = () => {
  const [user] = useState(getItem('user'))
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('candidate')
  const [registerResponse, setRegisterResponse] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/jobs/all')
    }
  }, [user, navigate])

  useEffect(() => {
    if (registerResponse?.success) {
      const { data } = registerResponse

      setItem('user', data)
      navigate('/jobs/all')
    }
  }, [registerResponse, navigate])

  return (
    <Styles className="create-account">
      <Container size="small">
        <SignUp
          request={{
            method: 'post',
            context: 'accounts',
            endpoint: 'create-account',
            data: { name, email, password, type },
            enableToastDefault: false,
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
              reset: true,
              onChange: setPassword,
            },
          ]}
          link={{
            to: '/',
            text: 'Voltar',
          }}
          callback={setRegisterResponse} />
      </Container>
    </Styles>
  )
}
