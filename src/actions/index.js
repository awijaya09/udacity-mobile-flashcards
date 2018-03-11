import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK } from './ActionTypes';

export function fetchAllDecks() {
    const getItem = AsyncStorage.getItem('decks')
        .then(decks => {
            return decks;
        })
        .catch(error => {
            return null;
        });
    return {
        type: FETCH_ALL_DECK,
        payload: getItem
    }
}