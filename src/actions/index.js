import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK, ADD_NEW_DECK, ADD_NEW_QUESTION } from './ActionTypes';

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
            var oldDecks = JSON.parse(decks);
            oldDecks['Decks'][values.id] = values;
            const insertNewItem = AsyncStorage.setItem('decks', JSON.stringify(oldDecks))
                .catch(error => {
                     callback(null);
                });
            return callback(oldDecks);
        });
    
    return {
        type: ADD_NEW_DECK,
        payload: currentDeck
    }
}

export function addNewQuestion(values, deckId) {
    const currentDeck = AsyncStorage.getItem('decks')
        .then(decks => {
            var oldDecks = JSON.parse(decks);
            oldDecks['Decks'][deckId].questions.push(values);
            const insertNewItem = AsyncStorage.setItem('decks', JSON.stringify(oldDecks))
                .catch(error => {
                    return null;
                });
            console.log("Deck update: " + oldDecks);
            return oldDecks;
        });

    return {
        type: ADD_NEW_QUESTION,
        payload: currentDeck,
    }
}