import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from './App';

test('deve renderizar o componente App', () => {
  renderWithRouter(<App />);
  
  const homeTitle = screen.getByRole('heading', {
    name: 'Você está na página Início',
  })

  expect(homeTitle).toBeInTheDocument();
});

test('deve renderizar o componente Sobre', () => {
  const { history } = renderWithRouter(<App />);

  const aboutLink = screen.getByRole('link', { name: 'Sobre' });

  userEvent.click(aboutLink);

  const { pathname } = history.location;
  expect(pathname).toBe('/about');

  const aboutTitle = screen.getByRole('heading', {
    name: 'Você está na página Sobre',
  });
  expect(aboutTitle).toBeInTheDocument();
});

test('deve testar um caminho não existente e a renderização de Not Found', () => {
  const { history } = renderWithRouter(<App />);

  act(() => {
    history.push('/pagina/que-nao-existe');
  })

  const notFoundTitle = screen.getByRole('heading', {
    name: 'Página não encontrada',
  });
  expect(notFoundTitle).toBeInTheDocument();
})
