import { combineReducers } from 'redux';
import DecksReducer from './DecksReducer';

const RootReducer = combineReducers({
    decks: DecksReducer
});

export default RootReducer;