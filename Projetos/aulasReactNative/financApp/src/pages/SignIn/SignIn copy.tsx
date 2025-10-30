import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Background } from './styles';

type SignInProps = Record<string, never>;
type SignInState = Record<string, never>;

export default class SignIn extends React.Component<SignInProps, SignInState> {
  render() {
    return (
    <Background>
      <View style={styles.container}>
        <Text>Tela Login</Text>
      </View>
    </Background>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});