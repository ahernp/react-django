import React from 'react';
import PropTypes from 'prop-types'

export default class FormatDate extends React.Component {
    render() {
        const { dateString } = this.props;
        if (dateString) {
            const options = {weekday: 'short', year: 'numeric', month: 'short', day: '2-digit',
                hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'};
            const date = new Date(dateString);
            return (<span>{date.toLocaleString('en-GB', options)}</span>);
        }
        else
            return '';
    }
}

FormatDate.propTypes = {
  dateString: PropTypes.string.isRequired
};
