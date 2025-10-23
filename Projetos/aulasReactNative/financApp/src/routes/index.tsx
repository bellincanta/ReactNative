import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './auth.routes';

type RoutesProps = Record<string, never>;

type RoutesState = {
  loading: boolean;
  signed: boolean;
};

export default class Routes extends React.Component<RoutesProps, RoutesState> {
  state: RoutesState = {
    loading: false, // simulação de carregamento
    signed: false,  // simulação de autenticação
  };

  render() {
    const { signed } = this.state;

    // Quando houver rotas autenticadas, substitua <View /> por <AppRoutes />
    return signed ? <View /> : <AuthRoutes />;
  }
}
