import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Image, BackHandler, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import{
    Layout, Section, SectionContent, Button, Text, TextInput, Picker
} from 'react-native-rapi-ui';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function Invitar({ navigation }) {
    const [date, setDate] = useState(new Date() // to set default from props or current date
);
const [time, setTime] = useState( new Date() // to set default from props or current date
);
const [mode, setMode] = useState('time');
const [show, setShow] = useState(false);

const onChange = (event, selectedValue) => {
  setShow(Platform.OS === 'ios');
    const selectedTime = selectedValue || new Date();
    setTime(selectedTime);
    setShow(Platform.OS === 'ios'); // to hide back the picker
    //setMode('date'); // defaulting to date for next open
};
const showMode = currentMode => {
  setShow(true);
  setMode(currentMode);
};

const showDatePicker = () => {
  showMode('time');
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
                    
                    <Section style={{marginTop: 30, width: "95%"}}>
                        <SectionContent style={{alignItems: 'center', alignContent: 'center'}} >
                            <Text size="xl" fontWeight="bold">INVITAR</Text>
                        </SectionContent>
                        <SectionContent>
                            <View style={{marginTop: -15}}>
                                <Text>Nombre</Text>
                                <TextInput
                                    placeholder="Nombre de la visita"
                                    style={{marginTop: 10, borderRadius: 8, backgroundColor: '#ffffff'}}
                                />
                            </View>
                            <View>
                                <TouchableOpacity onPress={showDatePicker}>
                                    <Text style={styles.title}>Seleccione hora de visita</Text>
                                </TouchableOpacity>
                                {show && (
                                    <DateTimePicker
                                        testID="dateTimePicker"
                                        value={time}
                                        mode={mode}
                                        is24Hour={false}
                                        display="default"
                                        onChange={onChange}
                                    />
                                )}
                                <Text style={{ marginTop: 20, alignSelf: 'center' }}>Hora de visita programada: {formatDate(time)}</Text>
                                <Button style={{ marginTop: 20 }} text="Generar QR" color="#997a3c" status="info" onPress={() => navigation.navigate('Qr')}/>
                            </View>
                        </SectionContent>
                    </Section>
                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});
const formatDate = (time) => {
return `${time.getHours()} hrs :${time.getMinutes()} min`;
};