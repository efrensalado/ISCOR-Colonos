import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, Picker
} from 'react-native-rapi-ui';

export default function Invitar({ navigation }) {
    useEffect(() => {
    const backAction = () => {
      Alert.alert("¡Espera!", "¿Deseas salir de la aplicación?", [
        {
          text: "Cancelar",
          onPress: () => null,
          style: "cancel"
        },
        { text: "Si", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
      }, []);
    
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
                        <SectionContent style={{alignItems: 'center', alignContent: 'center'}} >
                            <Text size="xl" fontWeight="bold"> INVITAR </Text>
                        </SectionContent>
                        <SectionContent>

                            <View style={{marginTop: 45}}>
                                <Text>Nombre</Text>
                                <TextInput
                                    style={{marginTop: 20, borderColo: '#d8d8d8', borderRadius: 8, backgroundColor: '#ffffff'}}
                                />
                            </View>
                            <View style={{marginTop: 45}}>
                                <Text>Hora de llegada</Text>
                                <Picker.Items label="Hola" value=""/>
                                <Picker.Items label="Hola" value=""/>
                                <Picker.Items label="Hola" value=""/>
                                <Button text="Generar Código QR" color="#997a3c" outline style={{marginTop: 10}} onPress={() => navigation.navigate('Qr')}/>
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}