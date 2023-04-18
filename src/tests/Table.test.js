import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithContext } from './helpers/renderWithContext';
import userEvent from '@testing-library/user-event';
import fetchPlanets from './mock/planetsAPI';

describe('Testes do componente table', () => {
  it('Testa se a tabela tem 13 colunas', () => {
    renderWithContext(<App />);
    const qtdd = document.getElementsByTagName('th');
    expect(qtdd).toHaveLength(13);
  });

  it('Testa se ao filtrar a tabela altera', async () => {

    global.fetch = jest.fn(
      function(url) {
      return Promise.resolve({
      json: () => Promise.resolve(fetchPlanets)
      })
      }
    );

    renderWithContext(<App />)

    const btn = await screen.findByRole('button', {
      name: /filtrar/i
    })
    expect(btn).toBeInTheDocument();
    
    expect(screen.getByRole('cell', {
      name: /tatooine/i
    })).toBeInTheDocument();

    userEvent.click(btn);
    const removeBtn = screen.getByRole('button', {
      name: /x/i
    });
    userEvent.click(removeBtn);
    screen.logTestingPlaygroundURL();

    userEvent.click(btn);
    const removeAllBtn = screen.getByRole('button', {
      name: /remove all filters/i
    })
    userEvent.click(removeAllBtn);
  })
});
