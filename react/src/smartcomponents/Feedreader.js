import React from 'react';

import './Feedreader.css';

import FeedreaderCounts from '../components/FeedreaderCounts';
import FeedreaderEntry from '../components/FeedreaderEntry';
import Footer from '../components/Footer';
import Header from '../components/Header';

import FeedreaderStore from '../stores/FeedreaderStore'

import { FEEDREADER_PAGE } from '../constants'

export default class Feedreader extends React.Component {
    constructor() {
        super();
        this.populateFeeds = this.populateFeeds.bind(this);
        const entries = FeedreaderStore.getAllEntries();
        const feeds = FeedreaderStore.getAllFeeds();
        const groups = FeedreaderStore.getAllGroups();
        this.toggleShowUnreadEntries = this.toggleShowUnreadEntries.bind(this);
        this.setFilterFeedId = this.setFilterFeedId.bind(this);
        this.state = { showUnreadEntries: true, filterFeedId: undefined, entries, feeds, groups };
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    componentWillMount() {
        FeedreaderStore.on('change', this.populateFeeds);
    }

    populateFeeds() {
        const entries = FeedreaderStore.getAllEntries();
        const feeds = FeedreaderStore.getAllFeeds();
        const groups = FeedreaderStore.getAllGroups();
        const showUnreadEntries = entries.some(entry => !entry.read_flag);
        this.setState({ ...this.state, showUnreadEntries, entries, feeds, groups });
    }

    componentWillUnmount() {
        FeedreaderStore.removeListener('change', this.populateFeeds);
    }

    setFilterFeedId(feedId) {
        return () => this.setState({ ...this.state, filterFeedId: feedId });
    }

    toggleShowUnreadEntries() {
        const showUnreadEntries = !this.state.showUnreadEntries;
        this.setState({ ...this.state, showUnreadEntries });
    }

    render() {
        const { showUnreadEntries, filterFeedId, entries, feeds, groups } = this.state;

        const shownEntries = showUnreadEntries ? entries.filter(entry => !entry.read_flag) : entries;

        const filteredEntries = filterFeedId === undefined ? shownEntries : shownEntries.filter(entry => entry.feed_id === filterFeedId);

        let entryList = filteredEntries.map(entry => (<FeedreaderEntry key={entry.id} entry={entry}></FeedreaderEntry>));

        const feedreaderCountsProps = { showUnreadEntries, filterFeedId, entries, feeds, groups, setFilterFeedId: this.setFilterFeedId };

        const footerProps = {
            controls: [{label: 'Unread', func: this.toggleShowUnreadEntries}]
        };

        return (
            <React.Fragment>
                <Header page={FEEDREADER_PAGE} />
                <div id="content">
                    <h1>{showUnreadEntries && 'Unread'} Entries</h1>
                    <FeedreaderCounts { ...feedreaderCountsProps } />
                    <div id="feedreader-entry-list">
                        {entryList}
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
                <Footer { ...footerProps } />
            </React.Fragment>
        )
    }
}
