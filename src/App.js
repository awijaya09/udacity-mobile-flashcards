import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from './components/Home';
import AddNewDeck from './components/AddNewDeck';
import DetailDeck from './components/DetailDeck';
import AddNewQuestion from './components/AddNewQuestion';
import QuizStack from './components/QuizStack';

//redux stack
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const MainStack = StackNavigator({
  Home: { screen : Home },
  DetailDeck: { screen: DetailDeck },
  QuizStack: { screen: QuizStack},
},
{
  headerMode: 'none',
});

const ModalStack = StackNavigator({
  MainStack: {screen: MainStack},
  NewDeck: { screen : AddNewDeck },
  AddNewQuestion: { screen: AddNewQuestion },
}, {
  mode: 'modal',
  headerMode: 'none'
});



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    });
    this.setState({ loading: false});
  }
  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <View style={{ flex: 1 }}>
          <ModalStack />
        </View>
      </Provider>
      
    );
  }
}

