import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Route from './src/Route';

export default class App extends React.Component{

  render(){
    return(
      <SafeAreaView style={{flex:1}}>
          <Route />
      </SafeAreaView>
    )
  }
}
