import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { SignIn, SignUp } from './componentes/pages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
