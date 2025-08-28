import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { ExpenseForm } from './ExpenseForm';
import { ExpenseCategory } from '../types';

describe('ExpenseForm', () => {
  it('renders correctly with initial state', () => {
    const mockSubmit = jest.fn();
    const { getByText, getByLabelText } = render(
      <ExpenseForm onSubmit={mockSubmit} />
    );

    // Verifica elementos básicos
    expect(getByLabelText('Descrição')).toBeTruthy();
    expect(getByLabelText('Valor')).toBeTruthy();
    expect(getByText('Categoria:')).toBeTruthy();
    expect(getByText('Mercado')).toBeTruthy();
    expect(getByText('Adicionar Gasto')).toBeTruthy();
  });
});