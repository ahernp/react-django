import React from 'react';
import { Link } from 'react-router-dom';

import marked from 'marked';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FormatDate from '../components/FormatDate';

import PageStore from '../stores/PageStore'

import { ADMIN_URL } from '../constants'

export default class Page extends React.Component {
    constructor() {
        super();
        this.populatePage = this.populatePage.bind(this);
        this.toggleSource = this.toggleSource.bind(this);
        this.state = { slug: null, showSource: false };
    }

    componentDidUpdate() {
        window.scrollTo(0, 0);
    }

    componentWillMount() {
        const { slug } = this.props.match.params;
        this.setState({ ...this.state, slug });
        PageStore.on('change', this.populatePage);
    }

    populatePage() {
        const { slug } = this.props.match.params;
        this.setState({ ...this.state, slug });
    }

    componentWillUnmount() {
        PageStore.removeListener('change', this.populatePage);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.slug !== nextProps.match.params.slug) {
            const { slug } = nextProps.match.params;
            this.setState({ ...this.state, slug });
        }
    }

    getMarkdownText(markdown) {
        const rawMarkup = marked(markdown);
        return {__html: rawMarkup};
    }

    toggleSource() {
        const showSource = !this.state.showSource;
        this.setState({ ...this.state, showSource });
    }

    render() {
        const { slug } = this.state;
        const page = PageStore.getPageBySlug(slug);

        if (!page) {
            return (
                <div>
                    <Header />
                    <div id="content">
                        <p>Loading...</p>
                        <Link to="/">ahernp.com</Link>
                    </div>
                    <Footer />
                </div>
            );
        }

        const generateChildLinks = (page) => {
            let childLinks = [];
            if (page.id) {
                const children = PageStore.getChildPages(page.id);
                if (children.length) {
                    childLinks = children.map(page =>
                        <Link key={page.id} to={'/pages/' + page.slug}>{page.title}</Link>
                    ).reduce((prev, curr) => [prev, ' ', curr]);
                }
            }
            return childLinks;
        };

        const childLinks = generateChildLinks(page);

        const source = <div id="page-source">
                        <h2>Page Source</h2>
                        <pre>{page.content}</pre>
                    </div>;

        const footerProps = {
            label: <span>Updated <FormatDate dateString={page.updated}/></span>,
            links: [
                (<React.Fragment><a href={ADMIN_URL + '/pages/page/' + page.id}>Admin</a>{' '}</React.Fragment>),
                (<Link to="/pages/markdown">Markdown</Link>)
            ],
            controls: [{label: 'Source', func: this.toggleSource}]
        };

        return (
            <React.Fragment>
                <Header page={page} />
                <div id="content">
                    <h2>{page.title}</h2>
                    <p>{childLinks}</p>
                    <div dangerouslySetInnerHTML={this.getMarkdownText(page.content)}></div>
                    {this.state.showSource && source}
                </div>
                <Footer {...footerProps} />
            </React.Fragment>
        )
    }
}