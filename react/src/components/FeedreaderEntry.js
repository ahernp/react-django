import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { toggleEntryReadAction } from '../actions/feedreaderActions';

import FormatDate from '../components/FormatDate';

import './FeedreaderEntry.css';

class FeedreaderEntry extends React.Component {
    constructor(props) {
        super(props);
        this.toggleEntryRead = this.toggleEntryRead.bind(this);
    }

    toggleEntryRead(entryId) {
        return () => this.props.toggleEntryReadAction(entryId);
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

FeedreaderEntry.propTypes = {
  entry: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleEntryReadAction: toggleEntryReadAction,
    }, dispatch);
};

export default connect(
  null,
  mapDispatchToProps
)(FeedreaderEntry);
