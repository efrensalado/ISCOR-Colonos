import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View, Image,StatusBar
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import{
    Text, Section, SectionContent, Button, TextInput, theme
} from 'react-native-rapi-ui';

import Clase from '../src/componentes/Clase';

export default function ClasesScreen({ route, navigation }) {
  const [clases, setClases] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const param = route.params.value; //Valor que trae el select
  useEffect(() => {
    fetch('http://dicormotechnology.com/ISCOR/ws/Servicio/getServicio?idServicio='+param)
      .then(response => response.json())
      .then(responseJson => {
        setClases(responseJson);
        setLoaded(true);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps='always'>
      <View style={
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Image source={require('../assets/iscorLogo.png')} style={{ height: 50, width: 150, marginTop: 30, marginBottom: 15 }}/>    
      
        
          <View>
        </View>
            <View style={[styles.container, styles.horizontal]}>
              {!loaded ? (
                <ActivityIndicator size='large' color='#333' />
              ) : (
              <FlatList
                columnWrapperStyle={{justifyContent: 'space-between'}}
                data={clases}
                numColumns={2}
                  renderItem={obj => (
                    <Clase
                      id={obj.item.id}
                      calif={obj.item.calif}
                      titulo={obj.item.titulo}
                      genero={obj.item.genero}
                      imagen={obj.item.imagen}
                    />
                  )}
                  keyExtractor={clase => clase.peliculaId}
                />
              )}
            </View>
          
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
});
