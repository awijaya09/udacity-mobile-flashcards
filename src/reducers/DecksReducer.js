import { FETCH_ALL_DECK } from '../actions/ActionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_ALL_DECK:
        console.log("Payload: " + action.payload.data);
        return action.payload.data;
    default:
        return state;
    }
}