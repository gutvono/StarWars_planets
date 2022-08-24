import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes do componente header', () => {
  it('Testa se renderiza a imagem de logo do Star Wars', () => {
    render(<App />);
    const logo = screen.getByAltText(/star wars logo/i)
    expect(logo).toBeInTheDocument();
  });
});
