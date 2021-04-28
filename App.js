import React from 'react';
import { useCachedResources } from 'react-native-rapi-ui';
import HomeScreen from './src/HomeScreen';

const App = () =>{
  const isLoadingComplete = useCachedResources();
  if(!isLoadingComplete){
    return null;
  }else{
    return <HomeScreen/>;
  }
}

export default App;