// src/Pessoa.tsx
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Exporta o tipo para o App também poder reutilizar
export type PessoaData = {
  nome: string;
  idade: number;
  email: string;
};

interface PessoaProps {
  data: PessoaData;
}

class Pessoa extends Component<PessoaProps> {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.pessoa}>
        <Text style={styles.pessoaNome}>{data.nome}</Text>
        <Text style={styles.pessoaLinha}>Idade: {data.idade}</Text>
        <Text style={styles.pessoaLinha}>Email: {data.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pessoa: {
    marginBottom: 12,
  },
  pessoaNome: {
    fontSize: 16,
    fontWeight: '600',
  },
  pessoaLinha: {
    fontSize: 14,
  },
});

export default Pessoa;
