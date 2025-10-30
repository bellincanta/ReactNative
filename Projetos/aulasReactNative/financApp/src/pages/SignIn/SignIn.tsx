import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import type { StackScreenProps } from '@react-navigation/stack';

import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText,
} from './styles';

type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

type Props = StackScreenProps<AuthStackParamList, 'SignIn'>;

export default class SignIn extends React.Component<Props> {
  render() {
    const { navigation } = this.props;

    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <Background>
          <Container>

            <Logo source={require('../../assets/Icone1.png')} />

            <AreaInput>
              <Input
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
              />
            </AreaInput>

            <AreaInput>
              <Input
                placeholder="Senha"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="go"
              />
            </AreaInput>

            <SubmitButton activeOpacity={0.8} onPress={() => { /* TODO: autenticar */ }}>
              <SubmitText>Acessar</SubmitText>
            </SubmitButton>

            <Link onPress={() => navigation.navigate('SignUp')}>
              <LinkText>Criar uma conta!</LinkText>
            </Link>
          </Container>
        </Background>
      </KeyboardAvoidingView>
    );
  }
}
