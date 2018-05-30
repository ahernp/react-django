import initialState from './initialState';
import {ACTION_TYPES} from '../constants';

export default function pagesReducer(state = initialState.pages, action) {
    switch (action.type) {
        case ACTION_TYPES.ALL_PAGES_RECEIVED:
            return action.pages;
        default:
            return state;
    }
}
