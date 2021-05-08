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
import Sacs from './src/Sacs';
import ClasesScreen from './src/ClasesScreen';
import AlimentosScreen from './src/AlimentosScreen';
import ServiciosScreen from './src/ServiciosScreen';
import Recuperar from './src/Recuperar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleStyle: { alignSelf: 'center' }}} initialRouteName='Inicio'>
        <Stack.Screen name='Inicio' component={HomeScreen} options={{headerLeft: null, gestureEnabled: false,headerTitle:'Login'}} />
        <Stack.Screen name='Bienvenido' component={SplashScreen} />
        <Stack.Screen name='Registro' component={Registro} />
        <Stack.Screen name='SecurityOneClick' component={SecurityOneClick} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Invitar' component={Invitar} />
        <Stack.Screen name='Qr' component={Qr} />
        <Stack.Screen name='Sacs' component={Sacs} />
        <Stack.Screen name='Clases' component={ClasesScreen} />
        <Stack.Screen name='Alimentos' component={AlimentosScreen} />
        <Stack.Screen name='Servicios' component={ServiciosScreen}/>
        <Stack.Screen name='Recuperar' component={Recuperar} options={{headerTitle:'Recuperar contraseña'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}