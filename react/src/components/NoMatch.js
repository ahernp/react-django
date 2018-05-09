import React from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';

export default class NoMatch extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <div id="content">
                    <h2>Page Not Found</h2>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}