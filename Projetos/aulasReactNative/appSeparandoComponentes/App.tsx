// App.tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

import Pessoas from './src/Pessoas/Pessoas';

type PessoaData = {
  nome: string;
  idade: number;
  email: string;
};

interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> { // Componente de classe
  constructor(props: unknown) { // Construtor
    super(props);// Chama o construtor da classe pai
    this.state = {// Estado inicial
      feed: [// Array de objetos PessoaData
        { nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' }, 
        { nome: 'João', idade: 22, email: 'joao@joao.com' },
        { nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { nome: 'Paulo', idade: 15, email: 'joao@joao.com' },
      ],
    };
  }

  private renderItem: ListRenderItem<PessoaData> = ({ item }) => <Pessoas data={item} />; // Função para renderizar cada item da lista

  private keyExtractor = (_item: PessoaData, index: number) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} //lista que irá receber os dados
          renderItem={
            ({item}) => <Pessoas data={item}/> } //responsável por renderizar cada item da lista
          //keyExtractor={this.keyExtractor}
          //contentContainerStyle={styles.listContent}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContent: {
    paddingVertical: 16,
    width: '100%',
    paddingHorizontal: 16,
  },
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

interface PessoaProps {
  data: PessoaData;
}

export default App;
