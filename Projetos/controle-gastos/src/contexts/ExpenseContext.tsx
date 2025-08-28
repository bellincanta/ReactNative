import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Expense, ExpenseContextType } from '../types';

// Cria o contexto com tipo definido mas valor inicial undefined
const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

// Provider que envolverá a aplicação
export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Estado para armazenar a lista de gastos
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // Função para adicionar novo gasto
  const addExpense = (expense: Omit<Expense, 'id'>) => {
    setExpenses(prev => [
      ...prev,
      {
        ...expense,
        id: Math.random().toString(36).substring(7), // Gera ID aleatório
      },
    ]);
  };

  // Função para remover gasto por ID
  const removeExpense = (id: string) => {
    setExpenses(prev => prev.filter(exp => exp.id !== id));
  };

  // Provedor do contexto com valores disponíveis
  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, removeExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

// Hook personalizado para acessar o contexto
export const useExpenses = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider');
  }
  return context;
};