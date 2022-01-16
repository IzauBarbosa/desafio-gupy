import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { setItem, getItem } from '../../../services/localStorage';
import { SignIn } from '../../templates';
import { Styles } from './styles';

export const Login = () => {
  
  const [loginResponse, setLoginResponse] = useState();
  const navigate = useNavigate();
  
  useEffect(() => {
    const user = getItem('user');

    if (user) {
      navigate('/jobs/all');
    }
  }, [navigate]);

  useEffect(() => {
    if (loginResponse?.success) {
      const { data } = loginResponse;
      
      setItem('user', data);
      navigate('/jobs/all');
    }
  }, [loginResponse, navigate]);

  return (
    <Styles>
      <SignIn callback={setLoginResponse} />
    </Styles>
  )
}