// src/App.tsx
import React, { Component } from 'react';
import { StyleSheet, View, FlatList, ListRenderItem } from 'react-native';

// Importa o componente e o tipo da Pessoa
import Pessoa, { type PessoaData } from './src/Pessoas/Pessoas';

interface AppState {
  feed: PessoaData[];
}

class App extends Component<unknown, AppState> {
  constructor(props: unknown) {
    super(props);
    this.state = {
      feed: [
        { nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' },
        { nome: 'João', idade: 22, email: 'joao@joao.com' },
        { nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { nome: 'Paulo', idade: 15, email: 'joao@joao.com' },
      ],
    };
  }

  private renderItem: ListRenderItem<PessoaData> = ({ item }) => (
    <Pessoa data={item} />
  );

  private keyExtractor = (_item: PessoaData, index: number) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          contentContainerStyle={styles.listContent}
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
});

export default App;
