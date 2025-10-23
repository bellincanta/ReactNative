import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type SignInProps = Record<string, never>;
type SignInState = Record<string, never>;

export default class SignIn extends React.Component<SignInProps, SignInState> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Tela Login</Text>
      </View>
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