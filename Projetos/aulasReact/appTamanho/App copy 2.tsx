import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'black'}}>

        <View style={{ flex:1, backgroundColor: 'green'}}>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          <Text>Primerio texto!!!</Text>
          
        </View>
        <View style={{ flex:1, backgroundColor: 'red'}}></View>
        <View style={{ flex:1, backgroundColor: 'yellow'}}></View>
          <Text>Segundo texto!!!</Text>
       
      </View>
    );
  }
}

export default App;