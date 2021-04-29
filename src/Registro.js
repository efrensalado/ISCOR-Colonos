import React from 'react';
import {View, ScrollView, Image} from 'react-native';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import { StatusBar } from 'expo-status-bar';

export default function Registro({ navigation }) {
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
                    <Section style={{marginTop: 30, width: "95%"}}>
                        <SectionContent>
                        <Text size="xl" fontWeight="bold"> Registrate en ISCOR</Text>
                        <View style={{marginTop:25}}>
                            <Text>Nombre completo</Text>
                            <TextInput
                            style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                        <Text>Telefono</Text>
                            <TextInput
                            placeholder="Número a 10 digitos"
                            keyboardType="numeric"
                            style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                            />
                        </View>

                        <View style={{marginTop: 25}}>
                        <Text>Correo Electrónico</Text>
                            <TextInput
                            placeholder="example@example.com"
                            style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                            <Text>Contraseña</Text>
                            <TextInput
                                secureTextEntry={true}
                                placeholder='************'
                                style={{marginTop: 10}}
                            />
                        </View>
                        <View style={{marginTop: 25,}}>
                            <Button text="Registrate" color="#997a3c" outline style={{marginTop: 10}}/>
                        </View>
                    </SectionContent>
                    </Section>
            </View>
            </ScrollView>
        </Layout>
    )
}