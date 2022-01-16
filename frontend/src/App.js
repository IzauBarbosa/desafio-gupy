import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { 
  SignIn, 
  SignUp,
  Jobs } from './componentes/pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="jobs">
            <Route path="all" element={<Jobs />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
