import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

// Definindo interfaces para props e state
interface AppProps {
  // Pode adicionar props aqui se necessário
}

interface AppState {
  nome: string;
  input: string
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
      nome: '',
      input: ''
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar(){
this.setState({nome: 'Bem vindo ' + this.state.input});
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder='Digite seu nome'
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({input: texto})}
        />
        <Button title ="Entrar" onPress={this.entrar} />
        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

export default App;