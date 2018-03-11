import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import AddNewDeck from './components/AddNewDeck';
import DeckDetail from './components/DeckDetail';

//redux stack
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

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
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={{ flex: 1 }}>
          <ModalStack />
        </View>
      </Provider>
      
    );
  }
}

