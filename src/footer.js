/* eslint-disable indent */

/**
 * @return {Node} reference to footer element.
 */
function createFooter() {
    const footerWrapper = document.createElement('div');

    footerWrapper.style['width'] = '100%';
    footerWrapper.style['min-height'] = '65px';
    footerWrapper.style['background-color'] = 'grey';

    return footerWrapper;
}

export default createFooter;
