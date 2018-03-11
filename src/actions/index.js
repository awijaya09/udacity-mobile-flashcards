import { AsyncStorage } from 'react-native';
import { FETCH_ALL_DECK } from './ActionTypes';

export function fetchAllDecks() {
    return (dispatch) => {
        AsyncStorage.getItem('decks', (error, decks) => {
            if(decks !== null) {
                console.log("Fetching data: " + decks);
                dispatch({type: FETCH_ALL_DECK, payload: JSON.parse(decks)});
            }
        });
    }
}