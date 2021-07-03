/* eslint-disable indent */

import './css/main.css';

/**
 * @return {Element} header the first main header component
 */
function initHeader() {
    // flex
    const container = document.createElement('div');
    container.id = 'landing-page-container';

    // navLinks is justified right
    // navLinks is a flex element
    const navLinks = document.createElement('nav');
    navLinks.id = 'nav-wrapper';

    const nav = {
        'Home': null,
        'Menu': null,
        'Contact Us': null,
    };

    for (const key in nav) {
        if ({}.hasOwnProperty.call(nav, key)) {
            const navButton = document.createElement('div');
            navButton.innerText = key;
            navButton.id = key;
            nav[key] = navButton;

            navLinks.appendChild(nav[key]);
        }
    }

    const landingPageContent = document.createElement('div');
    landingPageContent.id = 'front-content';

    container.appendChild(landingPageContent);

    container.appendChild(navLinks);

    return container;
}

export default initHeader;
