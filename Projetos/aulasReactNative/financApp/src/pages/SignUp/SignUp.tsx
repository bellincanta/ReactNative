import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

import { 
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText
 } from '../SignIn/styles';

import { useAuth } from '../../contexts/auth'; // Importa o hook personalizado

export default function SignUp() {
  const { user } = useAuth(); // Usa o hook personalizado

  function handleSignUp() {
    // Lógica para lidar com o cadastro do usuário
    //alert('Teste');
    console.log('Usuário cadastrado com sucesso!');
  }

  return (
    <Background>
      <Container>
        <AreaInput>
          <Input
            placeholder="Nome"
          />
        </AreaInput>
   
        <AreaInput>
          <Input
             placeholder="Seu email"
          />
        </AreaInput>

        <AreaInput>
          <Input
             placeholder="Sua senha"
          />
        </AreaInput>
        <AreaInput>
          <Input
             placeholder="Confirmação de senha"
          />
        </AreaInput>
        <SubmitButton activeOpacity={0.8} onPress={handleSignUp}>
          <SubmitText>Cadastrar</SubmitText>
        </SubmitButton>
      </Container>
    </Background>
  );
}