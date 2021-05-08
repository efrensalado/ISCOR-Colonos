import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function Recuperar({ navigation }) {
    
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
                    
                    <Section style={{ marginTop: 30, width: "95%" }}>
                        <SectionContent style={{alignItems: 'center', alignContent: 'center'}} >
                            <Text size="xl" fontWeight="bold">Recuperar contraseña</Text>
                        </SectionContent>
                        <SectionContent>
                            <View>
                                <Text>Correo Electrónico</Text>
                                <TextInput
                                    placeholder="example@example.com"
                                    keyboardType="email-address"
                                    style={{marginTop: 10, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                                />
                            </View>
                            <View style={{marginTop: 45, marginBottom: 20}}>
                                <Button text="Enviar correo" color="#997a3c" status="info"/>
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}