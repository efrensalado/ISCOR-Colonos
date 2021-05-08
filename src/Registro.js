import React, { useEffect, useState } from 'react';
import {View, ScrollView, Image, Alert} from 'react-native';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker';

export default function Registro({ navigation }) {
    const [image, setImage] = useState(null);
    const [nombre, setNombre] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');
    
    useEffect(() => {
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestCameraPermissionsAsync();
                if (status !== 'granted') {
                    alert('Sorry, we need camera roll permissions to make this work!');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };
    const tomarImage = async () => {
        let result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };



    const takeImage = async () => {
        Alert.alert(
            "Comprobante de domicilio",
            "Escoge o toma una foto",
            [
                {
                text: "Tomar foto",
                onPress: tomarImage
                },
                {
                text: "Cancelar",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
                },
                { text: "Escoger foto", onPress: pickImage }
            ]
        );
    };

  const registraUsuario = () => {
    const data = new FormData();
    data.append('NombreComp', nombre);
    data.append('Telefono', telefono);
    data.append('Correo', correo);
    data.append('Password', contrasenia);
    data.append('imagenComprobante', image);
    data.append('Direccion', direccion);
    fetch('http://dicormotechnology.com/ISCOR/ws/Usuario/registraUsuario', {
      method: 'POST',
      body: data
    })
      .then(responseJ => responseJ.json())
      .then(resp => {
        if (resp.resultado == false) {
          alert(resp.mensaje);
        } else {
          alert(resp.mensaje);
          navigation.navigate('Inicio');
        }
      })
      .catch(error => console.log(error));
  };

    return(
        <Layout>
            <StatusBar barStyle='light-content'></StatusBar>
            <ScrollView>
                <View style={
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }
            }>
                    <Image source={require('../assets/iscorLogo.png')} style={{ height: 50, width: 150, marginTop: 30, marginBottom: 15 }}/>    
                    <Section style={{marginTop: 30, width: "95%", marginBottom: 45}}>
                        <SectionContent>
                        <Text size="xl" fontWeight="bold"> Registrate en ISCOR</Text>
                        <View style={{marginTop:25}}>
                            <Text>Nombre completo</Text>
                           <TextInput
                                placeholder="Nombre completo"
                                style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                                value={nombre}
                                onChangeText={texto => setNombre(texto)}
                            />
                            </View>
                        <View style={{marginTop:25}}>
                            <Text>Dirección</Text>
                           <TextInput
                                placeholder="Dirección"
                                style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                                value={direccion}
                                onChangeText={texto => setDireccion(texto)}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                        <Text>Telefono</Text>
                            <TextInput
                            placeholder="Número a 10 digitos"
                            keyboardType="numeric"
                            style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                            value={telefono}
                            onChangeText={texto => setTelefono(texto)}
                            />
                        </View>

                        <View style={{marginTop: 25}}>
                        <Text>Correo Electrónico</Text>
                            <TextInput
                            placeholder="example@example.com"
                            style={{ marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff' }}
                            value={correo}
                            onChangeText={texto => setCorreo(texto)}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                            <Text>Contraseña</Text>
                            <TextInput
                                secureTextEntry={true}
                                placeholder='************'
                                style={{ marginTop: 10 }}
                                value={contrasenia}
                                onChangeText={texto => setContrasenia(texto)}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                            <Button text="Comprobante de domicilio" color="#997a3c" onPress={takeImage} />
                            {image && <Image source={{ uri: image }} style={{ alignSelf:'center', width: 200, height: 200, marginTop:15 }} />}
                        </View>
                        <View style={{marginTop: 25}}>
                            <Button onPress={() => { registraUsuario(); }} text="Registrate" color="#997a3c" outline style={{marginTop: 10}}/>
                        </View>
                    </SectionContent>
                    </Section>
            </View>
            </ScrollView>
        </Layout>
    )
}