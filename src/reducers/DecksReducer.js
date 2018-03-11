import { FETCH_ALL_DECK } from '../actions/ActionTypes';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_ALL_DECK:
        return state;
    default:
        return state;
    }
}