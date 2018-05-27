import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import './Feedreader.css';

import FeedreaderCounts from '../components/FeedreaderCounts';
import FeedreaderEntry from '../components/FeedreaderEntry';
import Footer from '../components/Footer';
import Header from '../components/Header';

import { ADMIN_URL, FEEDREADER_PAGE } from '../constants'

class Feedreader extends React.Component {
    constructor() {
        super();
        this.toggleShowUnreadEntries = this.toggleShowUnreadEntries.bind(this);
        this.setFilterFeedId = this.setFilterFeedId.bind(this);
        this.state = { showUnreadEntries: true, filterFeedId: undefined };
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    setFilterFeedId(feedId) {
        return () => this.setState({filterFeedId: feedId});
    }

    toggleShowUnreadEntries() {
        const showUnreadEntries = !this.state.showUnreadEntries;
        this.setState({showUnreadEntries});
    }

    render() {
        const { showUnreadEntries, filterFeedId } = this.state;
        const { groups, feeds, entries } = this.props;

        const shownEntries = showUnreadEntries ? entries.filter(entry => !entry.read_flag) : entries;

        const filteredEntries = filterFeedId === undefined ? shownEntries : shownEntries.filter(entry => entry.feed_id === filterFeedId);

        let entryList = filteredEntries.map(entry => (<FeedreaderEntry key={entry.id} entry={entry}></FeedreaderEntry>));

        const feedreaderCountsProps = { showUnreadEntries, filterFeedId, entries, feeds, groups, setFilterFeedId: this.setFilterFeedId };

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
                <Footer>
                    Dynamic content{' '}
                    <a key="admin-link" href={ADMIN_URL + 'feedreader'}>Admin</a>{' '}
                    <span className="ap-control" onClick={this.toggleShowUnreadEntries}>Unread</span>
                </Footer>
            </React.Fragment>
        )
    }
}

Feedreader.propTypes = {
  groups: PropTypes.array.isRequired,
  feeds: PropTypes.array.isRequired,
  entries: PropTypes.array.isRequired
};

function mapStateToProps(state) {
    return {
        groups: state.feedreaderReducer.groups,
        feeds: state.feedreaderReducer.feeds,
        entries: state.feedreaderReducer.entries
    };
}

export default connect(
  mapStateToProps,
  null
)(Feedreader);
