import { useState, useEffect, useCallback } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { requestToAPI, getItem } from '../../../services'
import { Container, H2, Paragraph, PulseLoading, Strong } from '../../atoms'
import { CardDefaultList } from '../../organisms'
import { NotContent } from '../../molecules'
import { Page } from '../../templates'
import { Styles, Header, Body } from './styles'

export const ArchiveJob = () => {
  const [user] = useState(getItem('user'))
  const [jobs, setJobs] = useState([])
  const [jobsFiltered, setJobsFiltered] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  const getJobs = useCallback(async () => {
    
    setJobs([]);
    setLoading(true);

    const response = await requestToAPI(
      {
        method: 'get',
        context: 'jobs',
        endpoint: 'list-all-jobs',
      },
      setLoading,
    )

    setJobs(response?.data || [])
  }, [])

  const handleApply = useCallback(
    async (jobId) => {
      const response = await requestToAPI(
        {
          method: 'post',
          context: 'jobs',
          endpoint: `apply/${jobId}`,
          data: { accountId: user.id },
        },
        setLoading,
        false
      )
      
      if (response?.success) {
        getJobs()
      }
    },
    [user, getJobs],
  )

  const handlePublish = useCallback(
    async (jobId) => {
      const response = await requestToAPI(
        {
          method: 'patch',
          context: 'jobs',
          endpoint: `publish-job/${jobId}`,
        },
        setLoading,
        false
      )
      
      if (response?.success) {
        getJobs()
      }
    },
    [getJobs],
  )

  useEffect(() => {
    const filterAndFormat = jobs.reduce((acc, item) => {
      let data = {
        title: item.name,
        content: (
          <>
            <Paragraph>
              <Strong>Status: </Strong>
              {item.status === 'published' ? 'Publicado' : 'Aguardando'}
            </Paragraph>
            <Paragraph>
              <Strong>Quantidade de Aplicações: </Strong>
              {item.applications.length}
            </Paragraph>
          </>
        ),
        button: {
          disabled: loading,
          loading: loading,
        },
      }

      if (user.type === 'candidate' && item.status === 'published') {
        data.disabled = (item.applications || []).includes(user.id)
        data.button.onClick = () => handleApply(item.id)
        data.button.text = 'Aplicar para vaga'
        acc.push(data)
      } else if (user.type === 'interviewer' && item.status === 'published') {
        data.disabled = false
        data.button.onClick = () => navigate(`/jobs/${item.id}`)
        data.button.text = 'Visualizar aplicações'
        acc.push(data)
      } else if (user.type === 'recruiter') {
        data.disabled = item.status === 'published'
        data.button.onClick = () => handlePublish(item.id)
        data.button.text = 'Publicar vaga'
        acc.push(data)
      }

      return acc
    }, [])

    setJobsFiltered(filterAndFormat.reverse())
  }, [user, jobs, navigate, handleApply, handlePublish])

  useEffect(() => {
    user ? getJobs() : navigate('/')
  }, [user, navigate, getJobs])

  return (
    <Styles className="archive-job">
      <Page>
        <Container size="large">
          <Header>
            <H2 size="large">Lista de vagas</H2>
            {user?.type === 'recruiter' && (
              <Link to="/jobs/create">Cadastrar</Link>
            )}
          </Header>
          <Body>
            {(loading && <PulseLoading />) || (jobsFiltered.length && <CardDefaultList items={jobsFiltered} />) || <NotContent text="No momento não temos vagas disponíveis." />}
          </Body>
        </Container>
      </Page>
    </Styles>
  )
}
