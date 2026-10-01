import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FAF6F0' },
          headerTintColor: '#4A3E3D',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Login" component={Login} options={{ title: 'Studio Beauty' }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Novo Cadastro' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Nossos Serviços' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}