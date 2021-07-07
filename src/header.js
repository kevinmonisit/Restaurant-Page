/* eslint-disable indent */

import './css/main.css';

const header = () => {
    let headerNode = null;
    let _nav = {};
    let headerTitle = null;

    const initHeader = () => {
        // flex
        const container = document.createElement('div');
        container.id = 'header';

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

        const leftSideHeader = document.createElement('div');
        leftSideHeader.id = 'left-header';

        const hiddenTitle = document.createElement('div');
        hiddenTitle.textContent = 'Ramen Ichiraku.';
        hiddenTitle.id = 'title-header';
        hiddenTitle.classList.toggle('title-header-toggle');
        headerTitle = hiddenTitle;

        leftSideHeader.appendChild(hiddenTitle);

        container.appendChild(leftSideHeader);
        container.appendChild(navLinks);

        headerNode = container;
        _nav = nav;
    };

    /**
     * The header in the landing page and in the
     * menu page are different. Therefore, when necessary,
     * this function may be called to adjust the header and
     * trigger animations appropriately.
     */
    const toggleHeader = () => {
        headerNode.classList.toggle('not-landing-page');
        headerTitle.classList.toggle('title-header-toggle');
        _toggleNavFontColor();
    };

    const _toggleNavFontColor = () => {
        for (const key in _nav) {
            if ({}.hasOwnProperty.call(_nav, key)) {
                _nav[key].classList.toggle('nav-links-toggle');
            }
        }
    };

    const getHeaderNode = () => headerNode;

    /**
     * An object that contains references to the three
     * navigation links. It is initialized with each
     * instance of header object.
     *
     * @return {Object} references to navigation links
     */
    const getNavLinks = () => _nav;

    initHeader();

    return {
        toggleHeader,
        getHeaderNode,
        getNavLinks,
    };
};

export default header;
