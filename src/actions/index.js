import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK, ADD_NEW_DECK } from './ActionTypes';

export function fetchAllDecks() {
    const getItem = AsyncStorage.getItem('decks')
        .then(decks => {
            return JSON.parse(decks);
        })
        .catch(error => {
            return null;
        });
    return {
        type: FETCH_ALL_DECK,
        payload: getItem
    }
}

export function addNewDeck(values, callback) {
    const currentDeck = AsyncStorage.getItem('decks')
        .then(decks => {
            const insertNewItem = AsyncStorage.setItem('decks', decks += JSON.stringify(values))
                .catch(error => {
                    callback(null);
                });
            callback(decks);
        });
    
    return {
        type: ADD_NEW_DECK,
        payload: currentDeck
    }
}