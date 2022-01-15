import axios from 'axios';

const API = 'http://localhost:8080/api/v1';

const requestToAPI = async (config, setLoading) => {

  setLoading(true);
  const { method, context, endpoint, data } = config;

  try {

    const response = await axios({
      url: `${API}/${context}/${endpoint}`, method, data
    });
    
    setLoading(false);

    return ({
      success: response?.status === 200,
      data: response?.data?.data,
    });

  } catch (error) {

    setLoading(false);
  }
}

export default requestToAPI;
