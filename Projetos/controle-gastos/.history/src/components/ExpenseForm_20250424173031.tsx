// Importação das bibliotecas e componentes necessários
import React, { useState } from 'react'; // Importa React e o hook useState
import { View, StyleSheet } from 'react-native'; // Componentes básicos do React Native
import { Button, TextInput, RadioButton, Text } from 'react-native-paper'; // Componentes UI estilizados
import { ExpenseCategory } from '../types'; // Importa o tipo de categoria de gastos

// Interface que define as propriedades que o componente recebe
interface ExpenseFormProps {
  onSubmit: (expense: { // Função callback chamada ao submeter o formulário
    description: string; // Descrição do gasto
    amount: string;     // Valor como string (para flexibilidade de input)
    category: ExpenseCategory; // Categoria do tipo importado
  }) => void;
}

// Componente principal do formulário
export const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  // Estados do componente
  const [description, setDescription] = useState(''); // Armazena a descrição
  const [amount, setAmount] = useState(''); // Armazena o valor como string
  const [category, setCategory] = useState<ExpenseCategory>('mercado'); // Categoria selecionada

  // Função chamada ao submeter o formulário
  const handleSubmit = () => {
    if (!description || !amount) return; // Validação básica
    
    // Chama a função passada via props com os dados
    onSubmit({
      description,
      amount,
      category,
    });

    // Reseta os campos após submissão
    setDescription('');
    setAmount('');
  };

  // Renderização do componente
  return (
    <View style={styles.container}> {/* Container principal com padding */}
      {/* Campo de texto para descrição */}
      <TextInput
        label="Descrição"
        value={description}
        onChangeText={setDescription} // Atualiza estado quando texto muda
        style={styles.input}
      />
      
      {/* Campo de texto para valor monetário */}
      <TextInput
        label="Valor"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric" // Teclado numérico no mobile
        style={styles.input}
      />
      
      {/* Título da seção de categorias */}
      <Text style={styles.categoryTitle}>Categoria:</Text>
      
      {/* Grupo de RadioButtons para seleção de categoria */}
      <RadioButton.Group 
        onValueChange={value => setCategory(value as ExpenseCategory)} // Atualiza categoria
        value={category} // Valor selecionado
      >
        {/* Opção Mercado */}
        <View style={styles.radioItem}>
          <RadioButton value="mercado" />
          <Text>Mercado</Text>
        </View>
        
        {/* Opção Combustível */}
        <View style={styles.radioItem}>
          <RadioButton value="combustivel" />
          <Text>Combustível</Text>
        </View>
        
        {/* Opção Lazer */}
        <View style={styles.radioItem}>
          <RadioButton value="lazer" />
          <Text>Lazer</Text>
        </View>
        
        {/* Opção Alimentação */}
        <View style={styles.radioItem}>
          <RadioButton value="alimentacao" />
          <Text>Alimentação</Text>
        </View>
        
        {/* Opção Outros */}
        <View style={styles.radioItem}>
          <RadioButton value="outros" />
          <Text>Outros</Text>
        </View>
      </RadioButton.Group>
      
      {/* Botão de submissão */}
      <Button 
        mode="contained"  // Estilo preenchido
        onPress={handleSubmit} // Chama a função de submissão
        style={styles.button}
      >
        Adicionar Gasto
      </Button>
    </View>
  );
};

// Estilização do componente
const styles = StyleSheet.create({
  container: {
    padding: 16, // Espaçamento interno
  },
  input: {
    marginBottom: 16, // Margem inferior para campos de texto
  },
  categoryTitle: {
    fontSize: 16, // Tamanho da fonte
    marginBottom: 8, // Espaço abaixo do título
  },
  radioItem: {
    flexDirection: 'row', // Disposição em linha
    alignItems: 'center', // Alinhamento vertical
    marginBottom: 8, // Espaço entre itens
  },
  button: {
    marginTop: 16, // Espaço acima do botão
  },
});