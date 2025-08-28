import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{height: 65, backgroundColor: 'black'}}>

        <View style={{ flex:1, backgroundColor: 'green'}}></View>

        <View style={{ flex:1, backgroundColor: 'red'}}></View>
        
        <View style={{ height: 65, backgroundColor: 'yellow'}}></View>
         
      </View>
    );
  }
}

export default App;