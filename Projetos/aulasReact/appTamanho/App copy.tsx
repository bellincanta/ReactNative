import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, backgroundColor: 'black'}}>
        <View style={{ width: 50, height: 50, backgroundColor: 'green'}}></View>
        <Text style={{color: 'red'}}>IFPR</Text>
        <Text style={{color: 'red'}}>TADS</Text>
      </View>
    );
  }
}

export default App;