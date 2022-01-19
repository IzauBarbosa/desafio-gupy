import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { setItem } from '../../../services';
import { ArchiveJob } from './index';

jest.mock('../../../services/request', () => ({
  requestToAPI: () => ({
    "data": {
      "data": [
        {
          "applications": [
            1
          ],
          "id": 1,
          "name": "My Job 1",
          "status": "published"
        },
        {
          "applications": [
            1
          ],
          "id": 2,
          "name": "My Job 2",
          "status": "draft"
        },
        {
          "applications": [],
          "id": 3,
          "name": "My Job 3",
          "status": "draft"
        }
      ]
    }
  })
}));

const user = {
  candidate: {
    id: 1,
		name: "Candidate",
		email: "candidate@email.com",
		password: "some-password",
		type: "candidate"
  },
  interviewer: {
    id: 2,
		name: "Interviewer",
		email: "interviewer@email.com",
		password: "some-password",
		type: "interviewer"
  },
  recruiter: {
    id: 3,
		name: "Recruiter",
		email: "recruiter@email.com",
		password: "some-password",
		type: "recruiter"
  }
}

// console.log(requestToAPI())
describe('Page archive job', () => {
  describe('When user is candidate', () => {
    
    setItem('user', user.candidate)
    render(<BrowserRouter><ArchiveJob /></BrowserRouter>);

    it('Should show only published jobs', () => {
      expect(screen.getByText(/My Job 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Status: Publicado/i)).toBeInTheDocument();
      expect(screen.getByText(/Quantidade de Aplicações: 1/i)).toBeInTheDocument();
    })
    it('Should show button to apply', () => {
      expect(screen.getByText(/Aplicar para vaga/i)).toBeInTheDocument();
    })
  })

  describe('When user is interviewer', () => {
    render(<BrowserRouter><ArchiveJob /></BrowserRouter>);
    it('Should show only published jobs', () => {

    })
    it('Should show button to get candidates that have applied', () => {
     
    })
  })

  describe('When user is recruiter', () => {
    render(<BrowserRouter><ArchiveJob /></BrowserRouter>);
    it('Should show only all jobs', () => {
    
    })
    it('Should show button to publish job', () => {
    
    })
  })
})
