import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK, ADD_NEW_DECK } from './ActionTypes';

export function fetchAllDecks() {
    const getItem = AsyncStorage.getItem('decks')
        .then(decks => {
            console.log("Deck item: " + decks);
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

export function addNewDeck(values) {
    const currentDeck = AsyncStorage.getItem('decks')
        .then(decks => {
            var oldDecks = JSON.parse(decks);
            oldDecks['Decks'].push(values)
            const insertNewItem = AsyncStorage.setItem('decks', JSON.stringify(oldDecks))
                .catch(error => {
                    return null;
                });
            return oldDecks;
        });
    
    return {
        type: ADD_NEW_DECK,
        payload: currentDeck
    }
}