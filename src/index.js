/* eslint-disable indent */
// import './css/initial-page.css';
// import component from './initial-page.js';
import headerComponent from './header.js';
import 'normalize.css';
import createFirstPageContent from './initial-page.js';
import contactPageComponent from './contact-us-page.js';
import menuPageComponent from './menu.js';
// import menuPage from './menu.js';

// const html = document.querySelector('html');
// html.translate = 'no';

const LANDING = 0;
const CONTACT_US = 1;
const MENU = 2;

let currPage = LANDING;

// ===================== Initializing Elements =============

// might want to use ES6 classes in the future
// looks kinda odd without the 'new' keyword tbh
const header = headerComponent();
document.body.appendChild(header.getHeaderNode());

const frontPageContent = document.getElementById('left-header');
frontPageContent.appendChild(createFirstPageContent());

const contactPage = contactPageComponent();
const menuPage = menuPageComponent();

// ===================== Setting Page Changing Logic =============

/**
 * @param {Number} prevPage the page the site is toggling from
 * @param {Number} currPage the page to toggle to
 */
function updatePage(prevPage, currPage) {
    if (prevPage === currPage) return;

    updateHeader(prevPage, currPage);

   _togglePage(prevPage);
   _togglePage(currPage);
}

/**
 *
 * This function will initiate an animation
 * to transition to or from a page.
 *
 * @param {Number} pageToToggle page to toggle visibility
 */
function _togglePage(pageToToggle) {
    const firstPageContent =
        document.getElementById('first-page-content-wrapper');

    switch (pageToToggle) {
        case LANDING:
            firstPageContent.classList.toggle('invisible');
            break;
        case CONTACT_US:
            contactPage.toggleContactPage();
            break;
        case MENU:
            menuPage.toggleMenuPage();
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

/**
 *
 * Because the number IDs for pages are numbers
 * and the buttons do not have access to these
 * constants, this function converts their keys
 * to these page number IDs.
 *
 * @param {String} key the button key
 * @return {Number} the corresponding page ID number
 */
function _getPageID(key) {
    const keyLower = key.toLowerCase();
    if (keyLower.includes('home')) {
        return LANDING;
    } else if (keyLower.includes('contact')) {
        return CONTACT_US;
    } else if (keyLower.includes('menu')) {
        return MENU;
    } else {
        throw Error(`Invalid key ${key}`);
    }
}

// ================= INITIALIZING BUTTONS ============

const navLinks = header.getNavLinks();
Object.keys(navLinks).forEach((key) => {
    navLinks[key].addEventListener('click', () => {
        const newPageID = _getPageID(key);

        updatePage(currPage, newPageID);
        currPage = newPageID;
    });
});

// updatePage(LANDING, MENU);
