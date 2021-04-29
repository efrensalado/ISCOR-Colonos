import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import SplashScreen from './src/SplashScreen';
import Registro from './src/Registro';
import SecurityOneClick from './src/SecurityOneClick';
import Home from './src/Home';
import Invitar from './src/Invitar';
import Qr from './src/Qr';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: false,headerTitleStyle: { alignSelf: 'center' }}} initialRouteName='Bienvenido'>
        <Stack.Screen name='Inicio' component={HomeScreen} options={{headerLeft: null, gestureEnabled: false}} />
        <Stack.Screen name='Bienvenido' component={SplashScreen} />
        <Stack.Screen name='Registro' component={Registro} />
        <Stack.Screen name='SecurityOneClick' component={SecurityOneClick} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Invitar' component={Invitar} />
        <Stack.Screen name='Qr' component={Qr} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}