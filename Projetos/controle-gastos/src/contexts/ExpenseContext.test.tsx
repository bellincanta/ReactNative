import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';
import { ExpenseProvider, useExpenses } from './ExpenseContext';

describe('ExpenseContext', () => {
  it('should add and remove expenses', () => {
    const wrapper = ({ children }) => (
      <ExpenseProvider>{children}</ExpenseProvider>
    );

    const { result } = renderHook(() => useExpenses(), { wrapper });

    // Teste inicial
    expect(result.current.expenses).toEqual([]);

    // Adicionar gasto
    act(() => {
      result.current.addExpense({
        description: 'Teste',
        amount: 100,
        category: 'mercado',
        date: new Date()
      });
    });

    // Verificar se adicionou
    expect(result.current.expenses.length).toBe(1);
    expect(result.current.expenses[0].description).toBe('Teste');

    // Remover gasto
    const idToRemove = result.current.expenses[0].id;
    act(() => {
      result.current.removeExpense(idToRemove);
    });

    // Verificar se removeu
    expect(result.current.expenses.length).toBe(0);
  });
});