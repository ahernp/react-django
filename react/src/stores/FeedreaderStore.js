import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

import { ACTIONS } from '../constants';

class FeedreaderStore extends EventEmitter {
    constructor() {
        super();
        this.entries = [];
        this.feeds = [];
        this.groups = [];
    }

    getAllEntries() {
        return this.entries;
    }

    getAllFeeds() {
        return this.feeds;
    }

    getAllGroups() {
        return this.groups;
    }

    handleActions(action) {
        switch(action.type) {
            case ACTIONS.FEEDREADER_DATA_RECEIVED: {
                this.setData(action.feedreaderData);
                break;
            }
            case ACTIONS.FEEDREADER_TOGGLE_ENTRY_READ_DONE: {
                this.toggleEntryRead(action.entryId);
                break;
            }
            default: {}
        }
    }

    setData(feedreaderData) {
        this.groups = feedreaderData.groups;
        this.feeds = feedreaderData.feeds;
        this.entries = feedreaderData.entries;
        this.emit('change');
    }

    toggleEntryRead(entryId) {
        const index = this.entries.findIndex(entry => entry.id === entryId);
        let entry = this.entries[index];
        entry.read_flag = !entry.read_flag;
        this.entries[index] = entry;
        this.emit('change');
    }
}

const feedreaderStore = new FeedreaderStore();

dispatcher.register(feedreaderStore.handleActions.bind(feedreaderStore));

export default feedreaderStore;
