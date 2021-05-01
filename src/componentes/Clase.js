import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo  } from '@expo/vector-icons';

export default function Clase({ id, calif, titulo, genero, imagen }) {
  return (
    <View
      style={{
        borderWidth: 2,
        borderColor: '#997a3c',
        flex: 1,
        flexDirection: 'row',
        margin: 5
      }}
    >
      <View
        style={{
          flex: 1,padding: 8
        }}
      >
        <Text  style={{opacity: 0, height: 0}}>
          {id}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 16
          }}
        >
          Clase/Servicio/Alimentos: {titulo}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 16
          }}
        >
          Maestro: {genero}
        </Text>


      </View>
      <View
        style={{
          flex: 1,
          maxWidth: 70,
          backgroundColor:'#997a3c',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <TouchableOpacity>
          <Entypo  name="phone" size={24} color="white" ></Entypo>
       </TouchableOpacity>
      </View>
    </View>
  );
}
