/* eslint-disable indent */

import './css/main.css';

/**
 * @return {Element} header the first main header component
 */
function initHeader() {
    // flex
    const header = document.createElement('div');
    header.id = 'main-header-first';

    // navLinks is justified right
    // navLinks is a flex element
    const navLinks = document.createElement('nav');

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

    header.appendChild(navLinks);

    return header;
}

export default initHeader;
