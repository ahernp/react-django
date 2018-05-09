import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';
import { HOME_PAGE } from '../constants';

export default class Header extends React.Component {
    render() {
        const { page } = this.props;

        const getBreadcrumbs = (page) => {
            if (page && page.link !== HOME_PAGE.link)
                return <span><Link to="/">ahernp.com</Link> &rsaquo; {page.title}</span>;
            if (page === undefined)
                return <span><Link to="/">ahernp.com</Link></span>;
            return <span>ahernp.com</span>
        };

        return (
            <div id="header">
                <p className="breadcrumbs">{getBreadcrumbs(page)}</p>
            </div>
        );
    }
}
