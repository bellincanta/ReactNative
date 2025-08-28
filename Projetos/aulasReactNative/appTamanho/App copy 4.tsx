import React, { Component } from 'react';
import { Text, View } from 'react-native';

class App extends Component{
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start'}}>

        <View style={{ width: 50, height: 50,  backgroundColor: 'green'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'red'}}></View>
        
        <View style={{ width: 50, height: 50, backgroundColor: 'yellow'}}></View>

        <View style={{ width: 50, height: 50, backgroundColor: 'blue'}}></View>
         
       
      </View>
    );
  }
}

export default App;