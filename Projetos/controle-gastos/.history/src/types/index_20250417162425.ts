// Define os tipos de categorias de gastos
export type ExpenseCategory = 'mercado' | 'combustivel' | 'lazer' | 'alimentacao' | 'outros';

// Interface para representar um gasto
export interface Expense {
  id: string;           // Identificador único
  description: string;  // Descrição do gasto
  amount: number;       // Valor do gasto
  category: ExpenseCategory; // Categoria
  date: Date;           // Data do gasto
}

// Tipo para o contexto de gastos
export type ExpenseContextType = {
  expenses: Expense[];  // Lista de gastos
  addExpense: (expense: Omit<Expense, 'id'>) => void; // Função para adicionar
  removeExpense: (id: string) => void; // Função para remover
};