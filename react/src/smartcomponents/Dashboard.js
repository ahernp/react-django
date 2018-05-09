import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { DASHBOARD_PAGE } from '../constants'

export default class Dashboard extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header page={DASHBOARD_PAGE} />
                <div id="content">
                    <p>Dashboard Content</p>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}