import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes do componente filters', () => {
  it('Testa se tem um input de texto', () => {
    render(<App />);
    const input = screen.getByTestId(/name-filter/i)
    expect(input).toBeInTheDocument();
  });
});
