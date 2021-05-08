import React, { useEffect, useState } from 'react';
import { Linking, Platform, View, ScrollView, Image, BackHandler, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import { Entypo } from '@expo/vector-icons';

export default function SecurityOneClick({ navigation }) {
    const makeCall = (n) => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${'+n+'}';
    } else {
      phoneNumber = 'telprompt:${'+n+'}';
    }

    Linking.openURL(phoneNumber);
    };
    
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
                            <Text size="xl" fontWeight="bold">Security OneClick</Text>
                        </SectionContent>
                        <SectionContent>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Emergencias: 911
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('911')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Protección Civil: 56-83-22-22
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('56832222')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Fuga de Agua: 56-54-32-10
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('56543210')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Denuncia Anónima: 089
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('089')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Fuga de Gas: 53-53-27-63
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('53532763')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                            <View
                                style={{
                                    flex: 1,
                                    borderWidth: 2,
                                    borderColor: '#997a3c',
                                    flexDirection: 'row',
                                    margin: 5,
                                    marginBottom: 16
                                }}
                            >
                                <View
                                    style={{
                                        flex: 1,
                                        padding: 7
                                    }}
                                >
                                    <Text>
                                    Bomberos: 57-68-37-00
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={() => makeCall('57683700')}
                                    style={{
                                    flex: 1,
                                    maxWidth: 70,
                                    backgroundColor:'#997a3c',
                                    alignItems: 'center',
                                    alignContent: 'center',
                                    justifyContent: 'center'
                                    }}
                                >
                                    <Entypo  name="phone" size={24} color="white" ></Entypo>
                                </TouchableOpacity>
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}