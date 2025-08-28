import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { Expense, ExpenseCategory } from './index';

const TypesDemo = () => {
  const [gasto, setGasto] = useState<Expense>({
    id: '1',
    description: 'Exemplo',
    amount: 0,
    category: 'mercado',
    date: new Date()
  });

  const mudarCategoria = () => {
    setGasto(prev => ({
      ...prev,
      category: prev.category === 'mercado' ? 'combustivel' : 'mercado'
    }));
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Descrição: {gasto.description}</Text>
      <Text>Valor: R$ {gasto.amount.toFixed(2)}</Text>
      <Text>Categoria: {gasto.category}</Text>
      <Text>Data: {gasto.date.toLocaleDateString()}</Text>
      
      <Button 
        title="Mudar Categoria" 
        onPress={mudarCategoria}
      />
      
      {/* Demonstre o erro em tempo de desenvolvimento */}
      {/* <Button 
        title="Categoria Inválida"
        onPress={() => setGasto(prev => ({ ...prev, category: 'viagem' }))}
      /> */}
    </View>
  );
};