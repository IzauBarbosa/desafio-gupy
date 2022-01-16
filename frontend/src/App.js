import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { 
  Login, 
  CreateAccount,
  ArchiveJob } from './componentes/pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path="create-account" element={<CreateAccount />} />
          <Route path="jobs">
            <Route path="all" element={<ArchiveJob />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
