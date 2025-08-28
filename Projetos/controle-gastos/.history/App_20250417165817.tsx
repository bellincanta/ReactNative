/** import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import React from 'react';
import { View, Button, ScrollView } from 'react-native';
import { ExpenseProvider, useExpenses } from './ExpenseContext';

const TestComponent = () => {
  const { expenses, addExpense, removeExpense } = useExpenses();

  return (
    <ScrollView style={{ padding: 20 }}>
      <Button
        title="Adicionar Gasto de Mercado"
        onPress={() => addExpense({
          description: 'Compras do mês',
          amount: 150.75,
          category: 'mercado',
          date: new Date()
        })}
      />

      <Button
        title="Adicionar Gasto de Combustível"
        onPress={() => addExpense({
          description: 'Posto Ipiranga',
          amount: 200.00,
          category: 'combustivel',
          date: new Date()
        })}
      />

      {expenses.map(expense => (
        <View key={expense.id} style={{ marginVertical: 10 }}>
          <Text>Descrição: {expense.description}</Text>
          <Text>Valor: R$ {expense.amount.toFixed(2)}</Text>
          <Text>Categoria: {expense.category}</Text>
          <Button
            title="Remover"
            onPress={() => removeExpense(expense.id)}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default function App() {
  return (
    <ExpenseProvider>
      <TestComponent />
    </ExpenseProvider>
  );
}
