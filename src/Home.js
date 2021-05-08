import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function Home({ route, navigation }) {
    const correo = route.params.value;
    alert(correo);
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
                            <Text size="xl" fontWeight="bold"> HOME </Text>
                            <Image
                                source={{ isStatic: true,uri: 'file:///var/mobile/Containers/Data/Application/C688C3E0-E6A5-473F-AA73-7FBDFF061839/Library/Caches/ExponentExperienceData/%2540zaidpereyra%252FAppColonos/ImagePicker/76E078F9-9B5E-4193-8B80-4D36C8D16A69.jpgicker/76E078F9-9B5E-4193-8B80-4D36C8D16A69.jpg' }}
                                style={{ width: 150, height: 150, borderWidth:1, borderColor:'#111' }}
                            />
                        </SectionContent>
                        <SectionContent>
                            <View style={{marginTop: 25}}>

                                <Button text="Invitar" color="#997a3c" outline style={{marginTop: 10}} onPress={() => navigation.navigate('Invitar')}/>
                                <Button text="SACS" color="#997a3c" outline style={{marginTop: 40}} onPress={() => navigation.navigate('Sacs')}/>
                                <Button text="Security OneClick" color="#997a3c" outline style={{marginTop: 40, marginBottom: 40}} onPress={() => navigation.navigate('SecurityOneClick')}/>

                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}