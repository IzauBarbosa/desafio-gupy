import { useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getItem } from '../../../services/localStorage';
import { requestToAPI } from '../../../services/request';
import { Paragraph } from '../../atoms';
import { ListDefault } from '../../molecules';
import { Styles } from './styles';

export const SingleJob = () => {

  const [user] = useState(getItem('user'));
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    
    const { jobId } = params;

    const request = async () => {
      
      const response = await requestToAPI({ 
        method: 'get', context: 'jobs', endpoint: `view-applications/${jobId}`
      }, setLoading);
      
      const format = (response?.data || []).reduce((acc, item) => 
        [...acc, { content: <>
          <Paragraph>{item.name}</Paragraph>
          <Paragraph>{item.email}</Paragraph>
        </> }]
      , []);
      
      setCandidates(format);
    }

    user?.type === "interviewer" ? request() : navigate('/jobs/all');

  }, [user, params, navigate]);
  
  return (
    <Styles>
      <ListDefault
        items={candidates}
      />
      <Link to="/jobs/all">Voltar</Link>
    </Styles>
  )
}