import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {
  ArchiveJob,
  CreateAccount,
  CreateJob,
  Login,
  SingleJob,
} from './componentes/pages'
import { Styles } from './styles'

function App() {
  return (
    <div className="App">
      <Styles>
        <BrowserRouter>
          <Routes>
            <Route index element={<Login />} />
            <Route path="create-account" element={<CreateAccount />} />
            <Route path="jobs">
              <Route path="all" element={<ArchiveJob />} />
              <Route path=":jobId" element={<SingleJob />} />
              <Route path="create" element={<CreateJob />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </Styles>
    </div>
  )
}

export default App
