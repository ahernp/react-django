import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { bindActionCreators } from "redux";

import { fetchAllPages } from '../actions/pageActions';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FormatDate from '../components/FormatDate';
import PageStore from '../stores/PageStore'

import { DYNAMIC_PAGES, SITE_MAP } from '../constants'

class SiteMap extends React.Component {
    componentWillMount() {
        this.props.fetchAllPages();
    }

    render() {
        let { pages } = this.props;
        const search = this.props.location.search;

        if (search) {
            const searchArray = search.slice(1).split('=');
            if (searchArray[0] === 'parent_id') {
                const value = parseInt(searchArray[1], 10);
                pages = PageStore.getChildPages(value)
            }
        }

        pages = DYNAMIC_PAGES.concat(pages).sort((a, b) => a.slug < b.slug ? -1 : 1);

        const pageItems = pages.map((page) =>
            <tr key={page.id}>
                <td><Link to={'/pages/' + page.slug}>{page.title}</Link></td>
                <td>{ page.updated ? (<FormatDate dateString={page.updated} />) : 'Dynamic Content'}</td>
            </tr>
        );
        return (
            <React.Fragment>
                <Header page={SITE_MAP} />
                <div id="content">
                    <h2>Pages</h2>
                    <table>
                        <thead>
                            <tr><th>Page</th><th>Updated</th></tr>
                        </thead>
                        <tbody>
                            {pageItems}
                        </tbody>
                    </table>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}

SiteMap.propTypes = {
  pages: PropTypes.array.isRequired,
  fetchAllPages: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    pages: state.pages
  };
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchAllPages: fetchAllPages,
    }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteMap);
