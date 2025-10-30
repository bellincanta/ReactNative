import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../pages/SignIn/SignIn';
import SignUp from '../pages/SignUp/SignUp'; 

export type AuthStackParamList = {
  SignIn: undefined;
  SignUp: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default class AuthRoutes extends React.Component {
  render() {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen 
          name="SignIn" 
          component={SignIn}
          options={{ headerShown: false }} />
        <AuthStack.Screen 
          name="SignUp" 
          component={SignUp} />
      </AuthStack.Navigator>
    );
  }
}