import React from 'react';
import { View, Text, Button } from 'react-native';
import { ExpenseProvider, useExpenses } from './ExpenseContext';

const ContextDemo = () => {
  const { expenses, addExpense, removeExpense } = useExpenses();

  const adicionarGasto = () => {
    addExpense({
      description: `Gasto ${expenses.length + 1}`,
      amount: Math.random() * 100,
      category: 'mercado',
      date: new Date()
    });
  };

  const removerUltimo = () => {
    if (expenses.length > 0) {
      removeExpense(expenses[expenses.length - 1].id);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Adicionar Gasto" onPress={adicionarGasto} />
      <Button title="Remover Último" onPress={removerUltimo} /> {/* Corrigido de remularUltimo para removerUltimo */}
      
      <Text>Total de Gastos: {expenses.length}</Text>
      
      {expenses.map(exp => (
        <View key={exp.id} style={{ marginTop: 10 }}>
          <Text>{exp.description}</Text>
          <Text>R$ {exp.amount.toFixed(2)}</Text>
          <Button 
            title="Remover" 
            onPress={() => removeExpense(exp.id)} 
          />
        </View>
      ))}
    </View>
  );
};

export const ContextStory = () => (
  <ExpenseProvider>
    <ContextDemo />
  </ExpenseProvider>
);