import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import AddNewDeck from './components/AddNewDeck';
import DeckDetail from './components/DeckDetail';


const MainStack = StackNavigator({
  Home: { screen : Home },
  DetailDeck: { screen: DeckDetail }
},
{
  headerMode: 'none',
});

const ModalStack = StackNavigator({
  MainStack: {screen: MainStack},
  NewDeck: { screen : AddNewDeck },
}, {
  mode: 'modal',
  headerMode: 'none'
});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ModalStack />
      </View>
    );
  }
}

