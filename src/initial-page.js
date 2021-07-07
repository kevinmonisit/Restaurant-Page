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
        if ({}.hasOwnProperty.call(elements, key)) {
            const wrapper = document.createElement('div');
            wrapper.id = key;
            elements[key] = wrapper;

            contentWrapper.appendChild(wrapper);
        }
    }

    elements['titleWrapper'].innerHTML = 'Ramen<br>Ichiraku.';
    elements['subtitleWrapper'].innerHTML =
        `Welcome to <span id=\'name\'>Naruto Uzumaki\'s</span>
        Go-To Ramen Shop.`;

    elements['textWrapper'].textContent = txt;

    return contentWrapper;
}

export default createFirstPageComponent;
