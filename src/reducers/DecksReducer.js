import { FETCH_ALL_DECK } from '../actions/ActionTypes';
import _ from 'lodash';

export default function(state = {}, action) {
    switch(action.type) {
    case FETCH_ALL_DECK:
        return JSON.parse(action.payload);
    default:
        return state;
    }
}