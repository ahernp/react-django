import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

import { ACTION_TYPES, PAGE_PARENT_ATTRIBUTE } from '../constants';

class PageStore extends EventEmitter {
    constructor() {
        super();
        this.pages = [];
    }

    getAllPages() {
        return this.pages;
    }

    getChildPages(parent_id) {
        return this.pages.filter(page => PAGE_PARENT_ATTRIBUTE in page && page[PAGE_PARENT_ATTRIBUTE] === parent_id);
    }

    getPageBySlug(slug) {
        return this.pages.find((page) => page.slug === slug);
    }

    handleActions(action) {
        switch(action.type) {
            case ACTION_TYPES.ALL_PAGES_RECEIVED: {
                this.setPages(action.pages);
                break;
            }
            default: {}
        }
    }

    setPages(pages) {
        this.pages = pages;
        this.emit('change');
    }

}

const pageStore = new PageStore();

dispatcher.register(pageStore.handleActions.bind(pageStore));

export default pageStore;
