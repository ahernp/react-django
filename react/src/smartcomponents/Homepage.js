import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import Header from '../components/Header';

import { HOME_PAGE } from '../constants';

export default class Homepage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header page={HOME_PAGE} />
                <div id="content">
                    <h1>Personal Website of Paul Ahern</h1>

                    <p>
                        Here you will find a <Link to="/pages/blog">Blog</Link>,
                        some Application <Link to="/pages/applications">Guides</Link>,
                        a catalog for my <Link to="/pages/library">Library</Link> and a <Link to="/pages/gallery">Gallery</Link> of photographs.
                    </p>

                    <p>See <Link to="/pages/rooska">Rooska</Link> for maps and photographs of my mountain.</p>

                    <div className="column-left">
                        <h2>External Links</h2>
                        <p>Favourite: <a href="http://dictionary.reference.com" title="Dictionary, Thesaurus, etc.">Dictionary</a> <a href="http://isabellebidou.com" title="Isabelle Bidou">Isabelle</a> <a href="https://startpage.com/uk/?" title="Google Search Results, but with privacy">StartPage</a></p>
                        <p>Apps: <a href="http://calibre-ebook.com/" title="Ebook Manager">Calibre</a> <a href="http://www.geany.org" title="Text editor">Geany</a> <a href="http://inkscape.org/" title="SVG editor">Inkscape</a> <a href="https://lastpass.com/" title="Password Manager">LastPass</a></p>
                        <p>Books:<a href="http://www.abebooks.co.uk/" title="Advanced Book Exchange">ABE</a> <a href="http://www.amazon.co.uk/" title="Amazon in the UK">Amazon</a> (<a href="http://read.amazon.com" title="Cloud Reader - Kindle Books">read</a>) <a href="http://www.baen.com/" title="Baen book publisher">Baen</a> <a href="http://oreilly.com/ebooks/" title="IT Books">O'Reilly</a> <a href="http://www.gutenberg.org/" title="Project Gutenberg">PG</a></p>
                        <p>Cartoons: <a href="http://www.dilbert.com/fast" title="Today's Dilbert comic">Dilbert</a> <a href="http://www.doonesbury.com" title="Today's Doonesbury comic">Doonesbury</a> <a href="http://www.garfield.com/comics/todayscomic.html" title="Today's Garfield comic">Garfield</a> <a href="http://xkcd.com/" title="IT Comic">xkcd</a></p>
                        <p>Games: <a href="http://www.orienteering.ie/boc" title="Bishopstown Orienteering Club">BOC</a> <a href="http://www.gamersgate.co.uk" title="GamersGate">GG</a> <a href="http://www.gog.com/" title="Good Old Games">GOG</a> <a href="https://www.humblebundle.com" title="Humble Indie Bundles">Humble</a> <a href="http://store.steampowered.com" title="Steam Shop">Steam</a></p>
                        <p>Media: <a href="http://www.bbc.co.uk/weather/2643743?day=0" title="BBC Weather">BBC</a> <a href="http://www.bbc.co.uk/iplayer/favourites">iPlayer</a> <a href="http://www.radiotimes.com/radio/radio-listings" title="Radio Times">RT</a> <a href="http://www.revolutionspodcast.com/" title="by Mike Duncan">Revolutions</a> <a href="https://www.youtube.com/feed/subscriptions">YouTube</a></p>
                        <p>Misc: <a href="http://academicearth.org" title="Academic Earth lectures">AE</a> <a href="https://www.gov.uk/" title="Info from the UK Government">gov.uk</a> <a href="http://www.openstreetmap.org/">Map</a> <a href="http://www.mpsonline.org.uk" title="Mail and Telephone preference service">MPS</a> <a href="http://www.metoffice.gov.uk/public/weather/observation/rainfall-radar#?map=Rainfall&fcTime=1465248600&zoom=9&lon=-0.43&lat=51.34" title="London rainfall radar">Radar</a> <a href="http://www.tfl.gov.uk/tube-dlr-overground/status/" title="London Underground Status">TfL</a> <a href="http://www.walks.com/" title="Guided walks in London">Walks</a></p>
                        <p>Shopping: <a href="http://www.allwrite.nl/" title="Pens">Allwrite</a> <a href="http://www.britishmuseum.org/" title="The British Museum">BM</a> <a href="http://www.marksandspencer.com" title="Marks and Spencer">M&amp;S</a> <a href="http://www.senzumbrellas.com/" title="Umbrellas">Senz</a></p>
                        <p>Social: <a href="https://www.google.com/contacts" title="Useful section Google doesn't provide a link to">Contacts</a> <a href="https://www.facebook.com/ahernp2" title="My Profile on Facebook">Facebook</a> <a href="https://www.linkedin.com/in/ahernp" title="My Profile on LinkedIn">LinkedIn</a> <a href="https://twitter.com/ahernp" title="My Profile on Twitter">Twitter</a></p>
                        <p>This Site: <a href="https://angular.io/docs/ts/latest/" title="Angular 2 in Typescript">Angular</a> <a href="http://www.djangoproject.com/" title="Web development framework">Django</a> <a href="https://github.com/ahernp/angular-django">GitHub</a></p>
                        <p>Web: <a href="http://www.cookwood.com/" title="HTML &amp; Cascading Style Sheets">CSS</a> <a href="http://grc.com/default.htm" title="PC security checks">Gibson</a> <a href="https://pypi.python.org/pypi" title="Python Package Index">PyPI</a> <a href="http://w3schools.com/" title="Web standards">W3Schools</a></p>
                    </div>

                    <div className="column-right">
                        <h2>Internal Links</h2>
                        <p><Link to="/pages/applications">App</Link> &rsaquo; <Link to="/pages/google-chrome">Chrome</Link> <Link to="/pages/firefox">Firefox</Link> <Link to="/pages/vim-editor">Vim</Link></p>
                        <p><Link to="/pages/blog">Blog</Link> &rsaquo; <Link to="/sitemap?parent_id=1">Archive</Link> <a href="https://ahernp.com/blog/feed">RSS</a></p>
                        <p><Link to="/pages/gallery">Gallery</Link> &rsaquo; <Link to="/pages/cork">Cork</Link> <Link to="/pages/london">London</Link> <Link to="/pages/wallpaper">Wallpaper</Link></p>
                        <p><Link to="/pages/library">Library</Link> &rsaquo; <Link to="/pages/books">Books</Link> <Link to="/pages/cds">CDs</Link> <Link to="/pages/dvds">DVDs</Link> <Link to="/pages/games">Games</Link></p>
                        <p>Misc <Link to="/pages/msc">MSc</Link> &rsaquo; <Link to="/pages/twinings-tea">Twinings Tea</Link></p>
                        <p><Link to="/pages/personal">Personal</Link> &rsaquo; <Link to="/pages/cv">CV</Link> <Link to="/pages/portfolio">Portfolio</Link> <Link to="/pages/profile">Profile</Link></p>
                        <p><Link to="/pages/reference">Ref</Link> &rsaquo; <Link to="/pages/linux">Linux</Link> <Link to="/pages/mysql">MySQL</Link> <Link to="/pages/python">Python</Link></p>
                        <p><Link to="/pages/rooska">Rooska</Link> &rsaquo; <Link to="/pages/2008-before">Before</Link> <Link to="/pages/maps">Maps</Link> <Link to="/pages/2010-planting">Planting</Link></p>
                        <p>This Site &rsaquo; <Link to="/dashboard">Dashboard</Link> <Link to="/sitemap">Site Map</Link></p>
                        <p><Link to="/tools">Tools</Link> &rsaquo; <Link to="/tools/cardgen">Cardgen</Link> <Link to="/tools/deduplicate">Deduplicate</Link></p>
                        <p><Link to="/feedreader">Feedreader</Link> Timers</p>
                    </div>

                    <div style={{clear:"both"}}></div>
                </div>
                <Footer />
            </React.Fragment>
        );
    }
}
