import initialState from './initialState';
import {ACTION_TYPES} from '../constants';

export default function feedreader(state = initialState.feedreader, action) {
    switch (action.type) {
        case ACTION_TYPES.FEEDREADER_DATA_FETCH:
            console.log('FEEDREADER_DATA_FETCH')
            return {
                groups: action.groups,
                feeds: action.feeds,
                entries: action.entries
            };
        // case ACTION_TYPES.FEEDREADER_TOGGLE_ENTRY_READ_DONE:
        //     const entries = state.entries.map((entry, index) => {
        //         if (entry.id === action.entryId) {
        //             return Object.assign({}, entry, {
        //                 read_flag: !entry.read_flag
        //             })
        //         }
        //         return entry
        //     });
        //     return {...state, entries};
        default:
            return state;
    }
}
