import React, { Component } from 'react';
import { View, Text, Button, GestureResponderEvent } from 'react-native';

type AppProps = {};
type AppState = { nome: string };

class App extends Component<AppProps, AppState> {
  // Estado inicial direto como class field (dispensa constructor)
  state: AppState = { nome: '' };

  // Handler compatível com Button.onPress: recebe (event) e atualiza
  entrar = (_event?: GestureResponderEvent) => {
    this.setState({ nome: 'TADS' });
  };

  // Handler para quando você quiser passar uma string manualmente
  entrarComNome = (nome: string) => {
    this.setState({ nome });
  };

  render() {
    return (
      <View style={{ marginTop: 20 }}>
    
       {/* Usa uma arrow para chamar o handler que recebe string */}
        <Button title="Entrar" onPress={() => this.entrarComNome('TADS2')} />

        <Text style={{ fontSize: 23, color: 'green', textAlign: 'center' }}>
          {this.state.nome}
        </Text>
      </View>
    );
  }
}

export default App;
