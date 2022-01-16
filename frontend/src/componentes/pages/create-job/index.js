import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getItem } from '../../../services/localStorage';
import { Form } from '../../organisms';
import { Styles } from './styles';

export const CreateJob = () => {
  
  const [user] = useState(getItem('user'));
  const [job, setJob] = useState();
  const [registerResponse, setRegisterResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    
    if (user?.type !== 'recruiter') {
      navigate('/jobs/all');
    }
  }, [user, navigate]);
  
  useEffect(() => {
    if (registerResponse?.success) {
      navigate('/jobs/all');
    }
  }, [registerResponse, navigate]);

  return (
    <Styles>
      <Form 
        request={{ 
          method: 'post', 
          context: 'jobs', 
          endpoint: 'create-job', 
          data: { name: job } 
        }}
        fields={[{
          type: 'text',
          id: 'job',
          label: 'Informe o nome',
          value: job,
          onChange: setJob
        }]}
        callback={setRegisterResponse} />
      <Link to="/jobs/all">Voltar</Link>
    </Styles>
  )
}