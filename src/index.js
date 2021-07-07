/* eslint-disable indent */
// import './css/initial-page.css';
// import component from './initial-page.js';
import headerComponent from './header.js';
import 'normalize.css';
import createFirstPageContent from './initial-page.js';

// const html = document.querySelector('html');
// html.translate = 'no';

const LANDING = 0;
const CONTACT_US = 1;
const MENU = 2;

const currPage = CONTACT_US;

// might want to use ES6 classes in the future
// looks kinda odd without the 'new' keyword tbh
const header = headerComponent();
document.body.appendChild(header.getHeaderNode());

/**
 * @param {Number} prevPage the page the site is toggling from
 * @param {Number} currPage the page to toggle to
 */
function updatePage(prevPage, currPage) {
    if (prevPage === currPage) return;

    updateHeader(currPage);
    // transition away the current elements
    // of the page (if it is not of the same page that is)

    switch (currPage) {
        case LANDING:
            const frontPageContent = document.getElementById('front-content');
            frontPageContent.appendChild(createFirstPageContent());
            break;
        case CONTACT_US:
            break;
        case MENU:
            break;
        default:
            break;
    }
}

/**
 * In desktop view, the header has a style in the landing page that
 * differs from that of the other pages. This function will change the
 * header style if necessary.
 *
 * For example, if the user selects Contact Us to Menu, the header will remain
 * the same. If it is Home to Contact Us or vice versa, the appropriate
 * style changes will be made.
 * @param {Number} prevPage the page that the site is transitioning FROM
 * @param {Number} currPage the page that the site is transitioning TO
 */
function updateHeader(prevPage, currPage) {
    if (prevPage == currPage) {
        return;
    }

    if (prevPage == LANDING || currPage == LANDING) {
        header.toggleHeader();
    }
}

updatePage(currPage);
header.toggleHeader();
