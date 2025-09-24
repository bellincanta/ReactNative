// App.tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

type PessoaData = {
  id: String;
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
        { id: '1', nome: 'Matheus', idade: 50, email: 'matheus@matheus.com' }, 
        { id: '2', nome: 'João', idade: 22, email: 'joao@joao.com' },
        { id: '3',  nome: 'Henrique', idade: 39, email: 'henrique@henrique.com' },
        { id: '4', nome: 'Paulo', idade: 15, email: 'joao@joao.com' },
      ],
    };
  }

  private renderItem: ListRenderItem<PessoaData> = ({ item }) => <Pessoa data={item} />; // Função para renderizar cada item da lista

  private keyExtractor = (_item: PessoaData, index: number) => index.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.feed} //lista que irá receber os dados
          renderItem={
            ({item}) => <Pessoa data={item}/> } //responsável por renderizar cada item da lista
          //keyExtractor={this.keyExtractor}
          //keyExtractor={(item) => item.id}
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

class Pessoa extends Component<PessoaProps> {
  render() {
    const { data } = this.props;
    return (
      <View style={styles.pessoa}>
        <Text >{this.props.data.nome}</Text>
    
      </View>
    );
  }
}

export default App;
