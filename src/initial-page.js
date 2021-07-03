/* eslint-disable indent */

import txt from './loremIpsum.txt';

/**
 * Creates the initial page.
 * @return {Node} test
 */
function createFirstPageComponent() {
    const contentWrapper = document.createElement('div');
    contentWrapper.id = 'first-page-content-wrapper';

    const elements = {
        'titleWrapper': null,
        'subtitleWrapper': null,
        'textWrapper': null,
    };

    for (const key in elements) {
        if (Object.hasOwnProperty.call(elements, key)) {
            const wrapper = document.createElement('div');
            wrapper.id = key;
            elements[key] = wrapper;

            contentWrapper.appendChild(wrapper);
        }
    }

    elements['titleWrapper'].textContent = 'Ramen\nIchiraku';
    elements['subtitleWrapper'].textContent =
        'Welcome to Naruto Uzumaki\'s Go-To Ramen Shop.';

    elements['textWrapper'].textContent = txt;

    return contentWrapper;
}

export default createFirstPageComponent;
