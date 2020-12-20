import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './Main';

export default function MainRouter() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
