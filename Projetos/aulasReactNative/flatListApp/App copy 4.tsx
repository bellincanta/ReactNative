// App.tsx
import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ListRenderItem } from 'react-native';

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
  areaPessoa: {
    backgroundColor: '#222',
    height: 200,
    marginBottom: 15,
  },
  textoPessoa: {
    color: '#fff',
    fontSize: 20,
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
      <View style={styles.areaPessoa}>
        <Text style={styles.textoPessoa}>Nome: {this.props.data.nome}</Text>
        <Text style={styles.textoPessoa}>Idade: {this.props.data.idade}</Text>
        <Text style={styles.textoPessoa}>Email: {this.props.data.email}</Text>
    
      </View>
    );
  }
}

export default App;
