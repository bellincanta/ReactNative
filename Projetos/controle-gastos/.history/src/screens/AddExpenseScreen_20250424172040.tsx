import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ExpenseForm } from '../components/ExpenseForm';
import { useExpenses } from '../contexts/ExpenseContext';

export const AddExpenseScreen: React.FC = () => {
  const { addExpense } = useExpenses();

  const handleSubmit = ({ description, amount, category }: {
    description: string;
    amount: string;
    category: string;
  }) => {
    addExpense({
      description,
      amount: parseFloat(amount),
      category: category as any,
      date: new Date(),
    });
  };

  return (
    <View style={styles.container}>
      <ExpenseForm onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});