import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import { requestToAPI, getItem } from '../../../services'
import { Container, H2, Paragraph, PulseLoading, Strong } from '../../atoms'
import { ListDefault, NotContent } from '../../molecules'
import { Page } from '../../templates'
import { Styles, Header, Body } from './styles'

export const SingleJob = () => {
  const [user] = useState(getItem('user'))
  const [candidates, setCandidates] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const { jobId } = params

    const request = async () => {
      const response = await requestToAPI(
        {
          method: 'get',
          context: 'jobs',
          endpoint: `view-applications/${jobId}`,
        },
        setLoading,
      )

      if (response?.success) {
        const format = (response?.data || []).reduce(
          (acc, item) => [
            ...acc,
            {
              content: (
                <>
                  <Paragraph>
                    <Strong>Nome:</Strong> {item.name}
                  </Paragraph>
                  <Paragraph>
                    <Strong>Email:</Strong> {item.email}
                  </Paragraph>
                </>
              ),
            },
          ],
          [],
        )

        setCandidates(format)
      } else {
        navigate('/jobs/all')
      }
    }

    user?.type === 'interviewer' ? request() : navigate('/jobs/all')
  }, [user, params, navigate])

  return (
    <Styles className="single-job">
      <Page>
        <Container size="large">
          <Header>
            <H2 size="large">Lista de candidatos</H2>
            <Link to="/jobs/all">Voltar</Link>
          </Header>
          <Body>
            {(loading && <PulseLoading />) ||
              (candidates.length && <ListDefault items={candidates} />) || (
                <NotContent text="No momento não temos candidatos para esta vaga." />
              )}
          </Body>
        </Container>
      </Page>
    </Styles>
  )
}
