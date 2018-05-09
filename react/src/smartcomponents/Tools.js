import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Cardgen from '../components/tools/Cardgen';
import Compare from '../components/tools/Compare';
import Deduplicate from '../components/tools/Deduplicate';
import Match from '../components/tools/Match';

import { TOOLS_PAGE } from '../constants'

export default class Tools extends React.Component {
    render() {
        let tool = <Cardgen />;
        switch(this.props.match.params.tool) {
            case 'compare': {
                tool = <Compare />;
                break;
            }
            case 'deduplicate': {
                tool = <Deduplicate />;
                break;
            }
            case 'match': {
                tool = <Match />;
                break;
            }
            default: {}
        }
        return (
            <React.Fragment>
                <Header page={TOOLS_PAGE} />
                <div id="content">
                    <h2>Tools</h2>
                    <p><Link to="/tools/cardgen">Cardgen</Link> <Link to="/tools/compare">Compare</Link> <Link to="/tools/deduplicate">Deduplicate</Link> <Link to="/tools/match">Match</Link></p>
                    {tool}
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}