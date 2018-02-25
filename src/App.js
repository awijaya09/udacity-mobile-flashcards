import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Home />
      </View>
    );
  }
}

