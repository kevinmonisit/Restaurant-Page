/* eslint-disable indent */

import './css/main.css';

const header = () => {
    let headerNode = null;

    const initHeader = () => {
        // flex
        const container = document.createElement('div');
        container.id = 'landing-page-container';

        // navLinks is justified right
        // navLinks is a flex element
        const navLinks = document.createElement('nav');
        navLinks.id = 'nav-wrapper';

        const nav = {
            'Home': null,
            'Contact Us': null,
            'Menu': null,
        };

        for (const key in nav) {
            if ({}.hasOwnProperty.call(nav, key)) {
                const navButton = document.createElement('div');
                navButton.innerText = key;
                navButton.id = key;
                navButton.style['cursor'] = 'pointer';
                nav[key] = navButton;

                navLinks.appendChild(nav[key]);
            }
        }

        const landingPageContent = document.createElement('div');
        landingPageContent.id = 'front-content';

        container.appendChild(landingPageContent);

        container.appendChild(navLinks);

        headerNode = container;
    };

    /**
     * The header in the landing page and in the
     * menu page are different. Therefore, when necessary,
     * this function may be called to adjust the header and
     * trigger animations appropriately.
     * @param {Node} header reference to header element
     */
    const toggleHeader = () => {
        header.classList.toggle('landing');
    };

    const getHeaderNode = () => headerNode;

    initHeader();

    return {
        toggleHeader,
        getHeaderNode,
    };
};

export default header;
