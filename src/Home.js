import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function Home({ navigation }) {
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
                        <SectionContent>
                            <Text size="xl" fontWeight="bold"> HOME </Text>

                            <View style={{marginTop: 45}}>
                                <Button text="Iniciar Sesión" color="#997a3c" status="info"/>
                                <Button text="Invitar" color="#997a3c" outline style={{marginTop: 10}} onPress={() => navigation.navigate('Invitar')}/>
                                <Button text="SACS" color="#997a3c" outline style={{marginTop: 10}} onPress={() => navigation.navigate('Registro')}/>
                                <Button text="Security OneClick" color="#997a3c" outline style={{marginTop: 10}} onPress={() => navigation.navigate('SecurityOneCLick')}/>
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}