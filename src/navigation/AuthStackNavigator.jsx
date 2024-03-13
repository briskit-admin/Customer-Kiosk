import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/Auth/LoginScreen';
import OtpScreen from 'screens/Auth/OtpScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="OtpScreen" component={OtpScreen} />
  </AuthStack.Navigator>
);
