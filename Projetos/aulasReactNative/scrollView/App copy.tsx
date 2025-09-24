import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

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
  box1:{
    backgroundColor: 'red',
    height: 250,
    width: 150
  },
  box2:{
    backgroundColor: 'green',
    height: 250,
    width: 150
  },
  box3:{
    backgroundColor: 'yellow',
    height: 250,
    width: 150
  },
  box4:{
    backgroundColor: 'blue',
    height: 250,
    width: 150
  },
});

class App extends Component<AppProps, AppState> {

  constructor(props: AppProps) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    //this.entrar = this.entrar.bind(this);
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} >
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
        </ScrollView>
        
      </View>
    );
  }
}

export default App;