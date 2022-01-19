import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import { Login } from './index';

test('renders learn react link', () => {
  render(<BrowserRouter><Login /></BrowserRouter>);
  expect(screen.getByText(/Informe seu email/i)).toBeInTheDocument();
  expect(screen.getByText(/Informe sua senha/i)).toBeInTheDocument();
  expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  expect(screen.getByText(/Cadastre-se/i)).toBeInTheDocument();
});