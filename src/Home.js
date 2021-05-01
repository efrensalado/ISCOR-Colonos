import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function Home({ navigation }) {
    
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