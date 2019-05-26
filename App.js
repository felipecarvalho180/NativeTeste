import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LoginPage from './src/pages/LoginPage/LoginPage'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginPage/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } 
});
