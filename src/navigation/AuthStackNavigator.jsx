import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from 'screens/Auth/LoginScreen';
import IntroScreen from 'screens/IntroScreen';
import TimeSlotScreen from 'screens/TimeSlotScreen';

const AuthStack = createStackNavigator();

export const AuthStackNavigator = ({authenticate}) => (
  <AuthStack.Navigator initialRouteName="TimeSlotScreen" screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    <AuthStack.Screen name="IntroScreen" component={IntroScreen}/>
    <AuthStack.Screen name="TimeSlotScreen" component={TimeSlotScreen}/>
  </AuthStack.Navigator>
);
