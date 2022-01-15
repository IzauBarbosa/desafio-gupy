import { useState, useEffect } from 'react';
import requestToAPI from './services/request';

function App() {

  const [loading, setLoading] = useState(false);

  const handleRequest = async () => {

    const teste = await requestToAPI({
      method: "get",
      context: "jobs",
      endpoint: "list-all-jobs"
    }, setLoading);
  }

  useEffect(() => {
    
    handleRequest();

  }, []);

  useEffect(() => {

    console.log(loading)
  }, [loading])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
