import React from 'react';
import {View} from 'react-native';
import{
    Layout, Section, SectionContent, Text, TopNav, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function App() {
    return(
        <Layout>
            <TopNav middleContent="Inicio de Sesión"/>
            <View style={
                {
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                }
            }>
                <Section style={{marginBottom: 20}}>
                    <SectionContent>
                        <Text size="xl" fontWeight="bold">ISCOR APP (Demo)</Text>
                    </SectionContent>
                </Section>
                <Section>
                    <SectionContent>
                        <Text size="xl" fontWeight="bold"> Inicia sesión en tu cuenta de ISCOR</Text>
                        <View style={{marginTop:25}}>
                            <Text>Correo Electrónico</Text>
                            <TextInput
                            placeholder="example@example.com"
                            style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                            />
                        </View>
                        <View style={{marginTop: 25}}>
                            <Text>Contraseña</Text>
                            <TextInput
                                placeholder='************'
                                style={{marginTop: 10}}
                            />
                        </View>

                        <View style={{marginTop: 25,}}>
                            <Button text="Iniciar Sesión" color="#997a3c" status="info"/>
                            <Button text="Registrate" color="#997a3c" outline style={{marginTop: 10}}/>
                            <Text style={{marginTop: 40}}> Recuperar Contraseña</Text>
                        </View>
                    </SectionContent>
                </Section>
            </View>
        </Layout>
    )
}