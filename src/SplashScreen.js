import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { StatusBar } from 'expo-status-bar';
import { useCachedResources } from 'react-native-rapi-ui';

const SplashScreen = ({ navigation }) => {
  const isLoadingComplete = useCachedResources();
  const [loadingProgress, setLoadingProgress] = useState(new Animated.Value(0));
  const [animationDone, setAnimationDone] = useState(false);

  useEffect(() => {
    Animated.timing(loadingProgress, {
      toValue: -100,
      duration: 2000,
      useNativeDriver: true,
      delay: 400
    }).start(() => {
      setAnimationDone(true);
      navigation.navigate('Inicio');
    });
  }, []);

  const colorLayer = animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: '#997a3c' }]} />
  );
  const whiteLayer = animationDone ? null : (
    <View style={[StyleSheet.absoluteFill, { backgroundColor: '#FFF' }]} />
  );
  const imageScale = {
    transform: [ 
      {
        scale: loadingProgress.interpolate({
          inputRange: [35, 65, 100],
          outputRange: [0.1, 0.06, 16]
        })
      }
    ]
  };
  const opacity = {
    opacity: loadingProgress.interpolate({
      inputRange: [0, 25, 100],
      outputRange: [0, 0, 1],
      extrapolate: 'clamp'
    })
  };

    if (!isLoadingComplete) {
      return null;
    } else {
        return (
    <View
      style={{
        flex: 1,
        width: '100%'
      }}
    >
      <View
        style={{
          margin: -1
        }}
      >
        <StatusBar barStyle='light-content'></StatusBar>
        {colorLayer}
        <MaskedView
          style={{ width: '100%', height: '100%' }}
          maskElement={
            <View style={styles.centered}>
              <Animated.Image
                source={require('../assets/iscorLogo.png')}
                style={[{ width: 1000 }, imageScale]}
                resizeMode='contain'
              />
            </View>
          }
          >
            
            {whiteLayer}
            
          <Animated.View style={[opacity, styles.centered]}>
            
          </Animated.View>
        </MaskedView>
      </View>
    </View>
  );
    }
  
}
const styles = StyleSheet.create({
  centered: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  centeredd: { flex: 1 }
});

export default SplashScreen;