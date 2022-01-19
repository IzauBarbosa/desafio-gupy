import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { setItem, getItem } from '../../../services'
import { Container } from '../../atoms'
import { SignIn } from '../../templates'
import { Styles } from './styles'

export const Login = () => {
  const [user] = useState(getItem('user'))
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginResponse, setLoginResponse] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user) {
      navigate('/jobs/all')
    }
  }, [user, navigate])

  useEffect(() => {
    if (loginResponse?.success) {
      const { data } = loginResponse

      setItem('user', data)
      navigate('/jobs/all')
    }
  }, [loginResponse, navigate])

  return (
    <Styles className="login">
      <Container size="small">
        <SignIn 
          request={{
            method: 'post',
            context: 'accounts',
            endpoint: 'login',
            data: { email, password },
            enableToastDefault: false,
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
          callback={setLoginResponse} />
      </Container>
    </Styles>
  )
}
