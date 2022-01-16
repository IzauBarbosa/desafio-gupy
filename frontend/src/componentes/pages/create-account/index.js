import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItem, getItem } from '../../../services/localStorage';
import { SignUp } from '../../templates';
import { Styles } from './styles';

export const CreateAccount = () => {
  
  const [user] = useState(getItem('user'));
  const [registerResponse, setRegisterResponse] = useState();
  const navigate = useNavigate();

  useEffect(() => {

    if (user) {
      navigate('/jobs/all');
    }
  }, [user, navigate]);
  
  useEffect(() => {
    if (registerResponse?.success) {
      const { data } = registerResponse;
      
      setItem('user', data);
      navigate('/jobs/all');
    }
  }, [registerResponse, navigate]);

  return (
    <Styles>
      <SignUp callback={setRegisterResponse} />
    </Styles>
  )
}