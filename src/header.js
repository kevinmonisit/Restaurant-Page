/* eslint-disable indent */

import './css/main.css';

const header = () => {
    let headerNode = null;
    let _nav = {};
    let headerTitle = null;

    let _animatedHeader = null;

    const _initHeader = () => {
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

        // animatedHeader is a div that transitions
        // by transforming itself to the top header
        // from the red left square in the home page
        // const animatedHeader = document.createElement('div');
        // animatedHeader.id = 'animation-header-element';

        const leftSideHeader = document.createElement('div');
        leftSideHeader.id = 'left-header';

        // _animatedHeader = animatedHeader;
        // _animatedHeader.classList.toggle('toggle-header-change-left');

        const body = document.querySelector('body');
        const containerDimensions = container.getBoundingClientRect();

        const time = new Date();
        console.log(time.getTime());

        leftSideHeader.addEventListener('load', function(e) {
            console.log('h');
            animatedHeader.style['width'] = `${leftSideHeader.offsetWidth}px`;
            animatedHeader.style['height'] = `${leftSideHeader.offsetHeight}px`;
        });
        console.log(new Date().getTime());

        setTimeout(() => {
        }, 5000);

        // body.append(animatedHeader);
        // leftSideHeader.appendChild(animatedHeader);

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
     * This should be called after the
     */
    const initHeaderAnimationElement = () => {
        const body = document.body;
        const animatedHeader = document.createElement('div');
        animatedHeader.id = 'animation-header-element';

        const leftSideHeader = document.querySelector('#left-header');

        animatedHeader.style['width'] = `${leftSideHeader.offsetWidth}px`;
        animatedHeader.style['height'] = `${leftSideHeader.offsetHeight}px`;

        body.appendChild(animatedHeader);
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

        if (_animatedHeader.classList.contains('toggle-header-change-top')) {
            _animatedHeader.classList.toggle('toggle-header-change-top');
            _animatedHeader.classList.toggle('toggle-header-change-left');
        }

        _animatedHeader.classList.toggle('toggle-header-change-top');

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

    _initHeader();

    return {
        toggleHeader,
        getHeaderNode,
        getNavLinks,
        initHeaderAnimationElement,
    };
};

export default header;
