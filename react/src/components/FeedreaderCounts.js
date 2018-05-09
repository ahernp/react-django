import React from 'react';

import './FeedreaderCounts.css';

function countEntries(groups, feeds, entries) {
    let feedCounts = {};
    for (let feed of feeds) {
        feedCounts[feed.id] = {count: 0}
    }

    for (let entry of entries) {
        feedCounts[entry.feed_id].count++;
    }

    let groupCounts = {};
    for (let group of groups) {
        groupCounts[group.id] = {count: 0}
    }

    for (let feed of feeds) {
        if (feed.group_id)
            groupCounts[feed.group_id].count += feedCounts[feed.id].count;
    }

    return { groupCounts, feedCounts }
}

export default class FeedreaderCounts extends React.Component {
    render() {
        const { setFilterFeedId, filterFeedId, showUnreadEntries, groups, feeds, entries } = this.props;
        if (feeds === undefined)
			return <p>No data</p>;
        const unreadEntries = entries.filter(entry => !entry.read_flag);
        const { groupCounts, feedCounts } = countEntries(
            groups,
            feeds,
            showUnreadEntries ? unreadEntries : entries);

        const groupList = groups.map(group => {
            const entryList = feeds.filter(feed => feed.group_id === group.id && feedCounts[feed.id].count > 0)
                .map(feed => (
                    <p key={feed.id} className={filterFeedId === feed.id ? 'selected' : ''} onClick={setFilterFeedId(feed.id)}>
                        {feed.title} ({feedCounts[feed.id].count})
                    </p>
                ));
            return (
                <React.Fragment key={group.id}>
                    <h3>{group.name} {groupCounts[group.id].count > 0 && '('+groupCounts[group.id].count+')'}</h3>
                    <div>{entryList}</div>
                </React.Fragment>
            )
        });

        const totalEntries = showUnreadEntries ? unreadEntries.length : entries.length;

        return (
            <div id="feedreader-entry-counts">
                <h2 onClick={setFilterFeedId(undefined)}>All {totalEntries > 0 && '(' + totalEntries + ')'}</h2>
                <div>{groupList}</div>
            </div>
        );
    }
}
