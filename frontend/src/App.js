import {
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';
import { 
  ArchiveJob,
  CreateAccount,
  CreateJob,
  Login, 
  SingleJob } from './componentes/pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="jobs">
            <Route path="all" element={<ArchiveJob />} />
            <Route path=":jobId" element={<SingleJob />} />
            <Route path="create" element={<CreateJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
