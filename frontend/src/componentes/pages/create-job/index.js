import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getItem } from '../../../services'
import { Container, H2 } from '../../atoms'
import { Form } from '../../organisms'
import { Page } from '../../templates'
import { Styles, Header, Body } from './styles'

export const CreateJob = () => {
  const [user] = useState(getItem('user'))
  const [job, setJob] = useState()
  const [registerResponse, setRegisterResponse] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    if (user?.type !== 'recruiter') {
      navigate('/jobs/all')
    }
  }, [user, navigate])

  useEffect(() => {
    if (registerResponse?.success) {
      navigate('/jobs/all')
    }
  }, [registerResponse, navigate])

  return (
    <Styles className="create-job">
      <Page>
        <Container size="small">
          <Header>
            <H2 size="large">Cadastrar Vaga</H2>
          </Header>
          <Body>
            <Form
              request={{
                method: 'post',
                context: 'jobs',
                endpoint: 'create-job',
                data: { name: job },
                enableToastDefault: false,
              }}
              fields={[
                {
                  type: 'text',
                  id: 'job',
                  label: 'Informe o nome',
                  value: job,
                  required: 'required',
                  onChange: setJob,
                },
              ]}
              link={{
                to: '/jobs/all',
                text: 'Voltar',
              }}
              callback={setRegisterResponse}
            />
          </Body>
        </Container>
      </Page>
    </Styles>
  )
}
