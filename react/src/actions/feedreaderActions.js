import axios from 'axios';

import { ACTION_TYPES, API_URL_ALL_ENTRIES, API_URL_ALL_FEEDS,
    API_URL_ALL_GROUPS, API_URL_ENTRY } from '../constants';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

async function fetchFeedreaderData(url) {
    const response = await axios.get(url);
    return response.data;
}

export const fetchAllFeedreaderDataAction = () => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTION_TYPES.FEEDREADER_DATA_FETCH});

            const groups = await fetchFeedreaderData(API_URL_ALL_GROUPS);
            const feeds = await fetchFeedreaderData(API_URL_ALL_FEEDS);
            const entries = await fetchFeedreaderData(API_URL_ALL_ENTRIES);

            dispatch({type: ACTION_TYPES.FEEDREADER_DATA_RECEIVED, groups, feeds, entries});
        } catch(error) {
            dispatch({type: ACTION_TYPES.FEEDREADER_FETCH_ERROR, error});
        }
    }
}

export const toggleEntryReadAction = (entryId) => {
    return async (dispatch) => {
        try {
            dispatch({type: ACTION_TYPES.FEEDREADER_TOGGLE_ENTRY_READ});
            await axios.post(
                API_URL_ENTRY + entryId + '/',
                {'read_flag': 'toggle'}
            );
            dispatch({type: ACTION_TYPES.FEEDREADER_TOGGLE_ENTRY_READ_DONE, entryId});
        } catch(error) {
            dispatch({type: ACTION_TYPES.FEEDREADER_TOGGLE_ENTRY_READ_ERROR, error: error});
        }
    }
}
