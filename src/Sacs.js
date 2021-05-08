import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, Platform, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import RNPickerSelect from 'react-native-picker-select';

export default function Sacs({ route, navigation }) {
//const para setear valor final de los servicios como highcharts
    const [servicios, setServicios] = useState([]);
    const [service, setService] = useState('');
    const [alimento, setAlimento] = useState([]);
    const [a, setA] = useState('');
    const [clase, setClase] = useState([]);
    const [classs, setClass] = useState('');
    
    useEffect(() => {

        fetch('http://dicormotechnology.com/ISCOR/ws/Servicio/getAllClases')
        .then(response => response.json())
        .then(responseJson => {
            setClase(responseJson);
        })
        .catch(error => {
            console.error(error);
        });

        fetch('http://dicormotechnology.com/ISCOR/ws/Servicio/getAllServicios')
        .then(response => response.json())
        .then(responseJson => {
            setServicios(responseJson);
        })
        .catch(error => {
            console.error(error);
        });

        fetch('http://dicormotechnology.com/ISCOR/ws/Servicio/getAllAlimentos')
        .then(response => response.json())
        .then(responseJson => {
            setAlimento(responseJson);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    if (Platform.OS === 'ios') {
        return (
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

                        <Image source={require('../assets/iscorLogo.png')} style={{ height: 50, width: 150, marginTop: 30, marginBottom: 15 }} />

                        <Section style={{ marginTop: 30, width: "95%" }}>
                            <SectionContent>
                                <Text style={{ alignSelf: 'center' }} size="xl" fontWeight="bold">SACS</Text>
                                <View style={{ marginTop: 35 }}>
                                    <Text style={{ alignSelf: 'center', marginBottom: 30 }}>Categorías:</Text>
                                    <RNPickerSelect
                                        placeholder={{ label: "Clases", value: 'keyC', key: 'key1' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => setClass(value)}
                                        items={clase}
                                        onDonePress={() => {
                                            navigation.navigate('Clases', {
                                                value: classs
                                            })
                                        }}
                                    />
                                    <RNPickerSelect
                                        placeholder={{ label: "Servicios", value: 'keyS', key: 'key2' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => setService(value)}
                                        items={servicios}
                                        onDonePress={() => {
                                            navigation.navigate('Servicios', {
                                                value: service
                                            })
                                        }}
                                    />
                                    <RNPickerSelect
                                        placeholder={{ label: "Alimentos", value: 'keyA', key: 'key3' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => setA(value)}
                                        items={alimento}
                                        onDonePress={() => {
                                            navigation.navigate('Alimentos', {
                                                value: a
                                            })
                                        }}
                                    />
                                </View>
                            </SectionContent>
                        </Section>
                    </View>
                </ScrollView>
            </Layout>
        );
    } else {
       return (
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

                        <Image source={require('../assets/iscorLogo.png')} style={{ height: 50, width: 150, marginTop: 30, marginBottom: 15 }} />

                        <Section style={{ marginTop: 30, width: "95%" }}>
                            <SectionContent>
                                <Text style={{ alignSelf: 'center' }} size="xl" fontWeight="bold">SACS</Text>
                                <View style={{ marginTop: 35 }}>
                                    <Text style={{ alignSelf: 'center', marginBottom: 30 }}>Categorías:</Text>
                                    <RNPickerSelect
                                        placeholder={{ label: "Clases", value: 'keyC', key: 'key1' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => value === 'keyC' ? '' : navigation.navigate('Clases', {
                                                value: value
                                            })}
                                       items={clase}
                                    />
                                    <RNPickerSelect
                                        placeholder={{ label: "Servicios", value: 'keyS', key: 'key2' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => value === 'keyS' ? '' : navigation.navigate('Servicios', {
                                                value: value
                                            })}
                                       items={servicios}
                                    />
                                    <RNPickerSelect
                                        placeholder={{ label: "Alimentos", value: 'keyA', key: 'key3' }}
                                        style={pickerSelectStyles}
                                        useNativeAndroidPickerStyle={false}
                                        onValueChange={(value) => value === 'keyA' ? '' : navigation.navigate('Alimentos', {
                                                value: value
                                            })}
                                       items={alimento}
                                    />
                                </View>
                            </SectionContent>
                        </Section>
                    </View>
                </ScrollView>
            </Layout>
        );
    }
    
}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#997a3c',
    borderRadius: 50,
    color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 30
  },
  inputAndroid: {
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#997a3c',
    borderRadius: 50,
    color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    marginBottom: 30
  },
});
