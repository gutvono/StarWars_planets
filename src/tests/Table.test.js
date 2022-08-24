import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Testes do componente table', () => {
  it('Testa se a tabela tem 13 colunas', () => {
    render(<App />);
    const qtdd = document.getElementsByTagName('th')
    expect(qtdd).toHaveLength(13);
  });
});
