import axios from 'axios';

import dispatcher from '../dispatcher';

import { ACTIONS, API_URL_ALL_ENTRIES, API_URL_ALL_FEEDS, API_URL_ALL_GROUPS, API_URL_ENTRY } from '../constants';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

async function fetchFeedreaderData(url) {
    const response = await axios.get(url);
    return response.data;
}

export async function fetchAllFeedreaderData() {
    try {
        dispatcher.dispatch({type: ACTIONS.FEEDREADER_DATA_FETCH});

        const groups = fetchFeedreaderData(API_URL_ALL_GROUPS);
        const feeds = fetchFeedreaderData(API_URL_ALL_FEEDS);
        const entries = fetchFeedreaderData(API_URL_ALL_ENTRIES);

        const feedreaderData = {
            groups: await groups,
            feeds: await feeds,
            entries: await entries
        };

        dispatcher.dispatch({type: ACTIONS.FEEDREADER_DATA_RECEIVED, feedreaderData});
    } catch(error) {
        dispatcher.dispatch({type: ACTIONS.FEEDREADER_FETCH_ERROR, error: error});
        console.log('error in fetchAllFeedreaderData', error)
    }
}

export async function toggleEntryReadAction(entryId) {
    try {
        dispatcher.dispatch({type: ACTIONS.FEEDREADER_TOGGLE_ENTRY_READ});
        await axios.post(
            API_URL_ENTRY + entryId + '/',
            {'read_flag': 'toggle'}
        );
        dispatcher.dispatch({type: ACTIONS.FEEDREADER_TOGGLE_ENTRY_READ_DONE, entryId});
    } catch(error) {
        dispatcher.dispatch({type: ACTIONS.FEEDREADER_TOGGLE_ENTRY_READ_ERROR, error: error});
        console.log('error in toggleEntryRead', error)
    }
}
