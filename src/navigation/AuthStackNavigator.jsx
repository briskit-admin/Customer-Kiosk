import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/Auth/LoginScreen';
import IntroScreen from 'screens/IntroScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = ({authenticate}) => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="IntroScreen" component={IntroScreen}/>
  </AuthStack.Navigator>
);
