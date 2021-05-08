import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import { useCachedResources } from 'react-native-rapi-ui';
import Sesion from './componentes/Sesion';

export default function HomeScreen({ navigation }) {
    const isLoadingComplete = useCachedResources();
    const [Correo, setCorreo] = useState('');
    const [Password, setPassword] = useState('');
    
    const [splash, setSplash] = useState(true);
    useEffect(() => {
        setTimeout(() => {
        setSplash(false);
        }, 2000);
    }, []);

    const iniciaSesion = () => {
        const data = new FormData();
        data.append('Correo', Correo);
        data.append('Password', Password);
        fetch('http://dicormotechnology.com/ISCOR/ws/Usuario/ingresasesion',{
                method: 'POST',
                body: data,
            }
        )
        .then((responseJ) => responseJ.json())
        .then((resp) => {
            if (resp.resultado == true) {
                Sesion.Correo = Correo;
                navigation.navigate('Home', { value: Sesion.Correo});
            } else {
                alert(resp.mensaje);
            }
        })
        .catch((error) => console.log(error));
    };

    if (!isLoadingComplete) {
        return <View><ActivityIndicator size='large' color='#333' /></View>;
    } else {
        return splash ?
                (<View style={{ flex: 1,
            justifyContent: 'center',
            alignItems: 'center', backgroundColor: '#997a3c' }} >
                    <Image transition={false} source={require('../assets/iscorLogo.png')} style={{ alignSelf:'center', height: 100, width: 300}} />
                </View>) : (
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
                    
                        <Image source={require('../assets/iscorLogo.png')} style={{ height: 50, width: 150, marginTop: 30, marginBottom: 15 }} />
                    
                        <Section style={{ marginTop: 30, width: "95%" }}>
                            <SectionContent style={{ alignItems: 'center', alignContent: 'center' }} >
                                <Text size="xl" fontWeight="bold"> Inicia sesión en tu cuenta de ISCOR </Text>
                            </SectionContent>
                            <SectionContent>
                                <View>
                                    <Text>Correo Electrónico</Text>
                                    <TextInput
                                        placeholder="example@example.com"
                                        keyboardType="email-address"
                                        style={{ marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff' }}
                                        value={Correo}
                                        onChangeText={texto => setCorreo(texto)}
                                    />
                                </View>
                                <View style={{ marginTop: 25 }}>
                                    <Text>Contraseña</Text>
                                    <TextInput
                                        placeholder='************'
                                        secureTextEntry={true}
                                        style={{ marginTop: 10 }}
                                        value={Password}
                                        onChangeText={texto => setPassword(texto)}
                                    />
                                </View>

                                <View style={{ marginTop: 45 }}>
                                    <Button text="Iniciar Sesión" color="#997a3c" status="info" onPress={() => { iniciaSesion(); }} />
                                    <Button text="Registrate" color="#997a3c" outline style={{ marginTop: 10 }} onPress={() => navigation.navigate('Registro')} />
                                    <TouchableOpacity onPress={() => navigation.navigate('Recuperar')} style={{ alignSelf: 'center' }}><Text style={{ marginTop: 40, color: '#997a3c' }}> Recuperar Contraseña</Text></TouchableOpacity>
                                </View>
                            </SectionContent>
                        </Section>
                    </View>
                </ScrollView>
            </Layout>
        );
    }
    
}