import React, { useState, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Clase from '../src/componentes/Clase';

export default function ClasesScreen({ route, navigation }) {
  const [clases, setClases] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const param = route.params.value; //Valor que trae el select
  useEffect(() => {
    fetch('http://cidtai.uteq.edu.mx/academia/asignaturas/dsm/peliculas.php')
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
    <ScrollView>
      <View>
        <Text>
          {param}
        </Text>
      </View>
          <View style={[styles.container, styles.horizontal]}>
            {!loaded ? (
              <ActivityIndicator size='large' color='#333' />
            ) : (
              <FlatList
                data={clases}
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
