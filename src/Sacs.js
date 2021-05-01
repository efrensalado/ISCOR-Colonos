import React, { useEffect, useState } from 'react';
import { View, ScrollView, Image, StyleSheet, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Text, Button, TextInput, theme
} from 'react-native-rapi-ui';
import RNPickerSelect from 'react-native-picker-select';

export default function Sacs({ route, navigation }) {

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
                            <Text style={{ alignSelf: 'center'}} size="xl" fontWeight="bold">SACS</Text>
                            <View style={{marginTop: 35}}>
                                <Text style={{ alignSelf: 'center', marginBottom: 30}}>Categorías:</Text>
                                <RNPickerSelect
                                    placeholder={{ label: "Clases", value: null }}
                                    style={pickerSelectStyles}
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={(value) => navigation.navigate('Clases', {
                                        value: value
                                    })}
                                    items={[
                                        { label: 'Regularización', value: 'Regularización' },
                                        { label: 'Música', value: 'Música' },
                                        { label: 'Idiomas', value: 'Idiomas' },
                                    ]}
                                />
                                <RNPickerSelect
                                    placeholder={{ label: "Servicios", value: null }}
                                    style={pickerSelectStyles}
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={(value) => navigation.navigate('Clases', {
                                        value: value
                                    })}
                                    items={[
                                        { label: 'Limpieza', value: 'Limpieza' },
                                        { label: 'Gas', value: 'Gas' },
                                        { label: 'Agua', value: 'Agua' },
                                    ]}
                                />
                                <RNPickerSelect
                                    placeholder={{ label: "Alimentos", value: null }}
                                    style={pickerSelectStyles}
                                    useNativeAndroidPickerStyle={false}
                                    onValueChange={(value) => navigation.navigate('Clases', {
                                        value: value
                                    })}
                                    items={[
                                        { label: 'Doña Lupe', value: 'Doña Lupe' },
                                        { label: 'Doña Mari', value: 'Doña Mari' },
                                        { label: 'Tortas Don Beto', value: 'Tortas Don Beto' },
                                    ]}
                                />
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
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
