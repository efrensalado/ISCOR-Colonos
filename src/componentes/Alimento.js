import React from 'react';
import { Linking, Text, View, Image, TouchableOpacity } from 'react-native';
import { Entypo  } from '@expo/vector-icons';

export default function Clase({ id, calif, titulo, genero, imagen }) {

  const makeCall = (n) => {

  let phoneNumber = '';

  if (Platform.OS === 'android') {
    phoneNumber = 'tel:${'+n+'}';
  } else {
    phoneNumber = 'telprompt:${'+n+'}';
  }

  Linking.openURL(phoneNumber);
  };

  return (
    <View
      style={{
        borderWidth: 1.5,
        borderColor: '#997a3c',
        flex: 1,
        margin: 5
      }}
    >
      <View
        style={{
          flex: 1,
          padding: 8,
          height: 280
        }}
      >
        <Text  style={{opacity: 0, height: 0}}>
          {id}
        </Text>
        <Image
          style={{
            flex: 1
          }}
          source={{
            uri: imagen
          }}
      />
        <Text
          style={{
            marginTop: 12,
            fontSize: 15
          }}
        >
          Servicio: {titulo}
        </Text>
        <Text
          style={{
            marginTop: 12,
            fontSize: 15
          }}
        >
          Maestro: {genero}
        </Text>


      </View>
      <TouchableOpacity onPress={() => makeCall(genero)}
        style={{
          flex: 1,
          minHeight:35,
          backgroundColor:'#997a3c',
          alignItems: 'center',
          alignContent: 'center',
          justifyContent: 'center'
          
        }}
      >
          <Entypo  name="phone" size={24} color="white" ></Entypo>
      </TouchableOpacity>
    </View>
  );
}
