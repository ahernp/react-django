import axios from 'axios';

import dispatcher from '../dispatcher';

import { ACTIONS, API_URL_ALL_PAGES } from '../constants';

export async function fetchAllPages() {
    try {
        dispatcher.dispatch({type: ACTIONS.ALL_PAGES_FETCH});
        const response = await axios.get(API_URL_ALL_PAGES);
        const pages = response.data;
        dispatcher.dispatch({type: ACTIONS.ALL_PAGES_RECEIVED, pages});
    } catch(error) {
        dispatcher.dispatch({type: ACTIONS.ALL_PAGES_ERROR, error: error});
        console.log('error in fetchAllPages', error)
    }
}
