import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import AuthProvider from './src/contexts/auth';

type AppProps = Record<string, never>;
type AppState = Record<string, never>;

export default class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" translucent />
         <Routes />
        </AuthProvider>
        
      </NavigationContainer>
    );
  }
}
