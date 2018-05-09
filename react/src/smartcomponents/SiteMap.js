import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';
import FormatDate from '../components/FormatDate';
import PageStore from '../stores/PageStore'

import { DYNAMIC_PAGES, SITE_MAP } from '../constants'

export default class Pages extends React.Component {
    constructor() {
        super();
        this.getAllPages = this.getAllPages.bind(this);
        this.state = { pages: [] };
    }

    componentWillMount() {
        this.getAllPages();
        PageStore.on('change', this.getAllPages);
    }

    componentWillUnmount() {
        PageStore.removeListener('change', this.getAllPages);
    }

    getAllPages() {
        this.setState({ pages: PageStore.getAllPages() });
    }

    render() {
        let { pages } = this.state;
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