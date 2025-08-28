import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

// Definindo interfaces para props e state
interface AppProps {
  // Pode adicionar props aqui se necessário
}

interface AppState {
  nome: string;
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto: {
    textAlign: 'center',
    fontSize: 25
  }
});

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: 'IFPF'
    };
  }

  pegaNome = (texto: string) => {
    this.setState({ nome: texto });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          underlineColorAndroid="transparent"
          onChangeText={this.pegaNome}
        />

        <Text style={styles.texto}> Bem vindo {this.state.nome}!!!</Text>
      </View>
    );
  }
}

export default App;