import React from 'react';

import './Footer.css';

import { ADMIN_URL } from '../constants'

export default class Footer extends React.Component {
    static defaultProps = {
        label: 'Dynamic Content',
        links: [(<a key="admin-link" href={ADMIN_URL}>Admin</a>)],
        controls: []
    };

    render() {
        const { label, links, controls } = this.props;

        const controlElements = controls.map(
            (control, index) => <React.Fragment key={'control'+index}>
                <span className="ap-control" onClick={control.func}>{control.label}</span>{' '}
            </React.Fragment>);

        return (
            <div id="footer">
                <p>{label} {links} {controlElements} </p>
            </div>
        );
    }
}
