import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import { renderWithContext } from './helpers/renderWithContext';

describe('Testes do componente filters', () => {
  it('Testa se tem um input de texto', () => {
    renderWithContext(<App />);
    const input = screen.getByTestId(/name-filter/i)
    expect(input).toBeInTheDocument();
  });
});
