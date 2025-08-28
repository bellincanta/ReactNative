import React, { Component } from 'react';
import { View, Text, Button, GestureResponderEvent } from 'react-native';

type AppProps = {};
type AppState = { nome: string };

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: 'TADS',
    };
    this.entrar = this.entrar.bind(this);
  }

  entrar = (_event?: GestureResponderEvent) => {
    this.setState({
      nome: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
    });
  };
  
  render() {
    return (
      <View style={{ marginTop: 20 }}>
        <Button title="Entrar" onPress={this.entrar} />
        <Text style={{ fontSize: 23, color: 'green', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;
