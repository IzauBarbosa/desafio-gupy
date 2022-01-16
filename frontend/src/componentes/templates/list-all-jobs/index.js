import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItem } from '../../../services/localStorage';
import { requestToAPI } from '../../../services/request';
import { CardDefault } from '../../molecules';
import { Styles } from './styles';

export const ListAllJobs = () => {
  
  const [user] = useState(getItem('user'));
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const getAllJobs = useCallback(async () => {

    const response = await requestToAPI({ 
      method: 'get', context: 'jobs', endpoint: 'list-all-jobs'
    }, setLoading);
    
    const filterJobs = (response?.data || []).filter(job => {
      switch (user.type) {
        case 'candidate':
          return job.status === 'published' && !((job.applications || []).includes(user.id));
        case 'interviewer':
          return job.status === 'published';
        default:
          return true;
      }
    });

    setJobs(filterJobs);

  }, [user]);

  useEffect(() => {

    user ? getAllJobs() : navigate('/');
  
  }, [user, getAllJobs, navigate]);

  const handleApply = async (jobId) => {

    await requestToAPI({ 
      method: 'post', context: 'jobs', endpoint: `apply/${jobId}`, data: { accountId: user.id }
    }, setLoading);

    getAllJobs();

  }

  const RenderJobs = () => {
    return (
      <>
        {jobs.map((job, index) => (
          <CardDefault 
            key={`card-${index}`}
            title={job.name}
            status={job.status}
            content={job.applications.length}
            action={(() => {
              
              const DEFAULT = {
                type: 'button',
                disabled: loading,
                loading: loading, 
              };

              switch (user.type) {
                case 'candidate':

                  return ({
                    ...DEFAULT,
                    onClick: () => handleApply(job.id),
                    text: 'Aplicar para vaga'
                  });
                case 'interviewer':

                  return ({
                    ...DEFAULT,
                    onClick: () => console.log('Change interviewer'),
                    text: 'Visualizar aplicações'
                  });
                default:

                  return ({
                    ...DEFAULT,
                    onClick: () => console.log('Change recruiter'),
                    text: 'Publicar vaga'
                  });
              }
            })()}
          />
        ))}
      </>
    );
  }

  const RenderNotFound = () => {
    return (
      <>
        Você não possui vagas disponíveis.
      </>
    )
  }

  return (
    <Styles>
      {(jobs.length && <RenderJobs />) || <RenderNotFound />}
    </Styles>
  )
}