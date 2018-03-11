import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK } from './ActionTypes';

export function fetch_all_decks() {

    return {
        type: FETCH_ALL_DECK,
        payload: {}
    }
}