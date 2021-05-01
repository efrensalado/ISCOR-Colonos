import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, BackHandler, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import { Entypo } from '@expo/vector-icons';

export default function SecurityOneClick({ navigation }) {
    
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
                            <Text size="xl" fontWeight="bold"> Security OneClick</Text>
                        

                            <View style={{marginTop: 40}}>
                            <TouchableOpacity  color="#997a3c" outline  style={{marginTop: 5, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Emergencias: 911
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop: 10}}>
                            <TouchableOpacity  color="#997a3c" outline  alignItems='left' style={{marginTop: 10, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Protección Civil: 56-83-22-22
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop: 10}}>
                            <TouchableOpacity  color="#997a3c" outline  alignItems='left' style={{marginTop: 10, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Fuga de Agua: 56-54-32-10
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop: 10}}>
                            <TouchableOpacity  color="#997a3c" outline  alignItems='left' style={{marginTop: 10, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Denuncia Anónima: 089
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop: 10}}>
                            <TouchableOpacity  color="#997a3c" outline  alignItems='left' style={{marginTop: 10, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Fuga de Gas: 53-53-27-63
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>

                            <View style={{marginTop: 10}}>
                            <TouchableOpacity  color="#997a3c" outline  alignItems='left' style={{marginTop: 10, borderWidth:2, borderColor: '#997a3c', padding: 7, borderRadius: 15}}>
                                <Text>Bomberos: 57-68-37-00
                                <Entypo  name="phone" size={24} color="#997a3c" ></Entypo>
                                </Text>
                            </TouchableOpacity>
                            </View>
                            
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}