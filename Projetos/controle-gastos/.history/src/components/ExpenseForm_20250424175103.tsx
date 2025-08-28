import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput, RadioButton, Text } from 'react-native-paper';
import { ExpenseCategory } from '../types';

interface ExpenseFormProps {
  onSubmit: (expense: {
    description: string;
    amount: string;
    category: ExpenseCategory;
  }) => void;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<ExpenseCategory>('mercado');

  const handleSubmit = () => {
    if (!description || !amount) return;
    
    onSubmit({
      description,
      amount,
      category,
    });

    setDescription('');
    setAmount('');
  };

  return (
    <View testID="form-container" style={styles.container}>
      <TextInput
        testID="description-input"
        label="Descrição"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
        accessibilityLabel="Campo de descrição do gasto"
      />
      
      <TextInput
        testID="amount-input"
        label="Valor"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
        style={styles.input}
        accessibilityLabel="Campo de valor do gasto"
      />
      
      <Text style={styles.categoryTitle}>Categoria:</Text>
      
      <View testID="category-radio-group">
        <RadioButton.Group
          onValueChange={value => setCategory(value as ExpenseCategory)} 
          value={category}
        >
          <View testID="category-mercado" style={styles.radioItem}>
            <RadioButton value="mercado" />
            <Text>Mercado</Text>
          </View>
          <View testID="category-combustivel" style={styles.radioItem}>
            <RadioButton value="combustivel" />
            <Text>Combustível</Text>
          </View>
          <View testID="category-lazer" style={styles.radioItem}>
            <RadioButton value="lazer" />
            <Text>Lazer</Text>
          </View>
          <View testID="category-alimentacao" style={styles.radioItem}>
            <RadioButton value="alimentacao" />
            <Text>Alimentação</Text>
          </View>
          <View testID="category-outros" style={styles.radioItem}>
            <RadioButton value="outros" />
            <Text>Outros</Text>
          </View>
        </RadioButton.Group>
      </View>
      
      <Button 
        testID="submit-button"
        mode="contained" 
        onPress={handleSubmit} 
        style={styles.button}
        accessibilityLabel="Botão para adicionar gasto"
      >
        Adicionar Gasto
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  categoryTitle: {
    fontSize: 16,
    marginBottom: 8,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  button: {
    marginTop: 16,
  },
});