import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface State {
  pizza: number; // índice da pizza selecionada
}

const PIZZAS = [
  { label: 'Mussarela', price: 49.9 },
  { label: 'Calabresa', price: 59.9 },
  { label: 'Brigadeiro', price: 54.9 },
  { label: 'Strogonoff', price: 64.9 },
];

export default class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = { pizza: 0 };
  }

  render() {
    const selecionada = PIZZAS[this.state.pizza];

    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Menu de Pizza</Text>

        <Picker
          selectedValue={this.state.pizza}
          onValueChange={(itemValue /* value */, _itemIndex) =>
            this.setState({ pizza: itemValue as number })
          }
        >
          <Picker.Item key={0} value={0} label="Mussarela" />
          <Picker.Item key={1} value={1} label="Calabresa" />
          <Picker.Item key={2} value={2} label="Brigadeiro" />
          <Picker.Item key={3} value={3} label="Strogonoff" />
        </Picker>

        <Text style={styles.pizzas}>
          Você escolheu: Pizza {selecionada.label}
        </Text>
        <Text style={styles.pizzas}>
          R$: {selecionada.price.toFixed(2)}
        </Text>
        <Text>Índice selecionado: {this.state.pizza}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20 },
  logo: { fontSize: 28, textAlign: 'center', fontWeight: 'bold' },
  pizzas: { fontSize: 20, textAlign: 'center', marginTop: 12 },
});
