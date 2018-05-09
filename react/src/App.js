import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { fetchAllFeedreaderData } from './actions/FeedreaderActions';
import { fetchAllPages } from './actions/PageActions';

import Homepage from './smartcomponents/Homepage';
import Dashboard from './smartcomponents/Dashboard';
import Feedreader from './smartcomponents/Feedreader';
import MarkdownPage from './smartcomponents/MarkdownPage';
import NoMatch from './components/NoMatch';
import SiteMap from './smartcomponents/SiteMap';
import Tools from './smartcomponents/Tools';

import './App.css';

class App extends Component {
    constructor() {
        super();
        fetchAllPages();
        fetchAllFeedreaderData();
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Homepage} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/feedreader' component={Feedreader} />
                    <Route path='/sitemap' component={SiteMap} />
                    <Route path='/pages/:slug' component={MarkdownPage} />
                    <Route path='/tools/:tool?' component={Tools} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        );
    }
}

export default App;
