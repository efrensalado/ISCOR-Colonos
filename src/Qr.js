import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';

export default function Qr({ navigation }) {
    
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
                            <Text size="xl" fontWeight="bold">CÓDIGO QR</Text>
                        </SectionContent>
                        <SectionContent style={{alignItems: 'center', alignContent: 'center'}}>
                            <View>
                                <Text>Se ha generado el siguiente código:</Text>
                            </View>
                            <View>
                                <Image source={require('../assets/QRprov.png')} style={{ height: 300, width: 300, marginTop: 30, marginBottom: 25 }} />
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}