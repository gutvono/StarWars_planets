import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { renderWithContext } from './helpers/renderWithContext';

describe('Testes do componente header', () => {
  it('Testa se renderiza a imagem de logo do Star Wars', () => {
    renderWithContext(<App />);
    const logo = screen.getByAltText(/star wars logo/i)
    expect(logo).toBeInTheDocument();
  });
});
