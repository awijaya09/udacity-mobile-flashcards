import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { StackNavigator } from 'react-navigation';
import AddNewDeck from './components/AddNewDeck';

const Main = StackNavigator({
  Home: { screen : Home },
  NewDeck: { screen : AddNewDeck }
},
{
  mode: 'modal',
  headerMode: 'none',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Main />
      </View>
    );
  }
}

