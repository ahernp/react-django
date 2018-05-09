import React from 'react';

import { toggleEntryReadAction } from '../actions/FeedreaderActions';

import FormatDate from '../components/FormatDate';

import './FeedreaderEntry.css';

export default class FeedreaderEntry extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEntryRead = this.toggleEntryRead.bind(this);
    }

    toggleEntryRead(entryId) {
        return () => toggleEntryReadAction(entryId);
    }

    render() {
        const { entry } = this.props;

        return (
            <div className="feed_entry" onClick={this.toggleEntryRead(entry.id)}>
                <h3 className="feed_entry_subtitle">
                    From {entry.title} on <FormatDate dateString={entry.published_time} /> { !entry.read_flag && '(unread)'}
                </h3>
                <p><a href={entry.link}><span>{entry.title}</span></a></p>
                <p dangerouslySetInnerHTML={{__html: entry.description}}></p>
            </div>
        );
    }
}
