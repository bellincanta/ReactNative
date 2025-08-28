// Importa a biblioteca React, essencial para criar componentes
import React from 'react';

// Importa componentes básicos do React Native para construção de UI
import { View, StyleSheet } from 'react-native';

// Importa o componente de formulário de gastos
import { ExpenseForm } from '../components/ExpenseForm';

// Importa o hook personalizado para acessar o contexto de gastos
import { useExpenses } from '../contexts/ExpenseContext';

// Define o componente funcional da tela de adição de gastos
export const AddExpenseScreen: React.FC = () => {
  // Extrai a função addExpense do contexto de gastos
  const { addExpense } = useExpenses();

  // Função que processa os dados do formulário quando submetido
  const handleSubmit = ({ description, amount, category }: {
    description: string;  // Descrição do gasto como string
    amount: string;      // Valor do gasto como string (vindo do input)
    category: string;    // Categoria selecionada
  }) => {
    // Chama a função do contexto para adicionar o novo gasto
    addExpense({
      description,       // Mantém a descrição original
      amount: parseFloat(amount),  // Converte valor para número
      category: category as any,   // Faz type assertion da categoria
      date: new Date(),   // Adiciona a data atual automaticamente
    });
  };

  // Retorna a estrutura visual da tela
  return (
    // Container principal da tela com estilos aplicados
    <View style={styles.container}>
      {/* Renderiza o formulário de gastos e passa a função handleSubmit */}
      <ExpenseForm onSubmit={handleSubmit} />
    </View>
  );
};

// Define os estilos do componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,       // Faz o container ocupar todo espaço disponível
    padding: 16,   // Adiciona um espaçamento interno de 16 pixels
  },
});