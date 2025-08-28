import React, { Component } from 'react';
import { View, Text, Image  } from 'react-native';

//Componente em forma de função
//function App(){
//  return(
//    <View>
//      <Text> Olá Mundo! </Text>
//    </View>
//  )
//}

//Componente em forma de classe
//class App extends Component{
//  render(){
//    return(
//      <View>
//        <Text> Olá Mundo!!! </Text>
//        <Text> Meu primeiro app!!! </Text>
//      </View>
//    );
//  }
//}

//Entendo as props
//class App extends Component{
//  render(){
//    let nome = 'Pudim';
//    let img = 'https://www.pudim.com.br/pudim.jpg';
//    return(
//      <View>
//        <Text> Olá Mundo!!! </Text>
//        <Text> Meu primeiro app!!! </Text>
//        <Text style={{
//          color: 'red', 
//          fontSize: 25,
//          margin: 15 }}> 
//            IFPR 
//        </Text>

//        <Image
//          source={{ uri: 'https://www.pudim.com.br/pudim.jpg'}}
//          style={{ width: 300, height: 300}}
//        />
//        <Text style={{ fontSize: 30, color: 'blue'}}> {nome} </Text>

//        <Image
//          source={{ uri: img }}
//          style={{ width: 300, height: 300}}
//        />
//        <Text style={{ fontSize: 30, color: 'blue'}}> {nome} </Text>
//      </View>
//    );
//  }
//}

//Criando seus componentes
class App extends Component{
  render(){
    let nome = 'Pudim';
    return(
      <View>
        <Text> Olá Mundo!!! </Text>
        <Text> Meu primeiro app!!! </Text>
        <Text style={{
          color: 'red', 
          fontSize: 25,
          margin: 15 }}> 
            IFPR 
        </Text>
        <Jobs largura={500} altura={200}/>
        <Text style={{ fontSize: 30, color: 'blue'}}> {nome} </Text>
      </View>
    );
  }
}
export default App;


type JobsProps = {
  largura: number;
  altura: number;
};

class Jobs extends Component<JobsProps>{
  render(){

    let img = 'https://www.pudim.com.br/pudim.jpg';

    return(
      <Image 
        source={{uri: img}}
        //style={{ width: 300, height: 300}}
        style={{ width: this.props.largura, height: this.props.altura}}
      />
    )
  }
}