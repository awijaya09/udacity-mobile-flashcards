import { FETCH_ALL_DECK, ADD_NEW_DECK, ADD_NEW_QUESTION } from '../actions/ActionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_ALL_DECK:
        return action.payload;
    case ADD_NEW_DECK:
        return action.payload;
    case ADD_NEW_QUESTION:
        return action.payload;
    default:
        return state;
    }
}