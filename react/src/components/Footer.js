import React from 'react';

import './Footer.css';

import { ADMIN_URL } from '../constants'

const DEFAULT_FOOTER = (<React.Fragment>Dynamic Content <a key="admin-link" href={ADMIN_URL}>Admin</a></React.Fragment>);

export default class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <p>{this.props.children ? this.props.children : DEFAULT_FOOTER}</p>
            </div>
        );
    }
}
