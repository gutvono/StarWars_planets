import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
import App from '../App';
import { renderWithContext } from './helpers/renderWithContext';
import userEvent from '@testing-library/user-event';
import fetchPlanets from './mock/planetsAPI';
import AppProvider from '../context/AppProvider';
import { act } from 'react-dom/test-utils';

// beforeEach(() => {
//   jest.spyOn(global, 'fetch')
//     .mockImplementation(() => Promise.resolve({
//       status: 200,
//       ok: true,
//       json: () => Promise.resolve(fetchPlanets),
//     }));
//   });
  
//   afterEach(() => {
//     jest.clearAllMocks();
// });

describe('Testes do componente table', () => {
  it('Testa se a tabela tem 13 colunas', () => {
    renderWithContext(<App />);
    const qtdd = document.getElementsByTagName('th');
    expect(qtdd).toHaveLength(13);
  });

  it('Testa se ao filtrar a tabela altera', async () => {
    // beforeEach();
    // global.fetch = jest.fn(() =>
    //   Promise.resolve({
    //     json: () => Promise.resolve(fetchPlanets),
    //   })
    // );

    global.fetch = jest.fn(
      function(url) {
      return Promise.resolve({
      json: () => Promise.resolve(fetchPlanets)
      })
      }
    ); 
    renderWithContext(<App />)
    // await waitFor(() => {
    //   renderWithContext(<App />);
    // })

    // await act(async () => {
    //   renderWithContext(<App />);
    //   });
    //   expect(global.fetch).toHaveBeenCalled();

    
    const btn = await screen.findByRole('button', {
      name: /filtrar/i
    })
    expect(btn).toBeInTheDocument();
    screen.logTestingPlaygroundURL();
    // userEvent.click(btn);

    expect(screen.getByRole('cell', {
      name: /tatooine/i
    })).toBeInTheDocument();

    const planetsRendered = screen.findAllByTestId('table-planets');
    // expect(planetsRendered).toHaveLength(9);
  })
});
