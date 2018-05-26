import axios from 'axios';

import { ACTION_TYPES, API_URL_ALL_PAGES } from '../constants';

export const fetchAllPages = () => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTION_TYPES.ALL_PAGES_FETCH});
            const response = await axios.get(API_URL_ALL_PAGES);
            const pages = response.data;
            dispatch({type: ACTION_TYPES.ALL_PAGES_RECEIVED, pages});
        } catch(error) {
            dispatch({type: ACTION_TYPES.ALL_PAGES_ERROR, error: error});
            console.log('error in fetchAllPages', error)
        }
    }
}
