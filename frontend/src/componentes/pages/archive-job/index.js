import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { getItem } from '../../../services/localStorage'
import { requestToAPI } from '../../../services/request'
import { CardDefaultList } from '../../organisms'
import { Archive } from '../../templates'
import { Styles } from './styles'

export const ArchiveJob = () => {
  const [user] = useState(getItem('user'))
  const [jobs, setJobs] = useState([])
  const [jobsFiltered, setJobsFiltered] = useState([])
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getJobs = useCallback(async () => {
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
      await requestToAPI(
        {
          method: 'post',
          context: 'jobs',
          endpoint: `apply/${jobId}`,
          data: { accountId: user.id },
        },
        setLoading,
      )

      getJobs()
    },
    [user, getJobs],
  )

  const handlePublish = useCallback(
    async (jobId) => {
      await requestToAPI(
        {
          method: 'patch',
          context: 'jobs',
          endpoint: `publish-job/${jobId}`,
        },
        setLoading,
      )

      getJobs()
    },
    [getJobs],
  )

  useEffect(() => {
    const filterAndFormat = jobs.reduce((acc, item) => {
      let data = {
        status: item.status,
        title: item.name,
        content: item.applications.length,
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
        data.disabled = false
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
    <Styles>
      <Archive>
        <CardDefaultList items={jobsFiltered} />
      </Archive>
    </Styles>
  )
}
