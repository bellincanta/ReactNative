import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Tipagem das props definida localmente
interface PessoaProps {
  data: {
    nome: string;
    idade: number;
    email: string;
  };
}

class Pessoas extends Component<PessoaProps> {
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

export default Pessoas;
