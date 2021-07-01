/* eslint-disable indent */

import txt from 'raw-loader!./loremIpsum.txt';

/**
 * Creates the initial page.
 * @return {Node} test
 */
function createFirstPageComponent() {
    const wrapperBackground = document.createElement('div');
    wrapperBackground.id = 'first-page-background-wrapper';

    const title = document.createElement('h1');
    title.innerText = "Ramen\nIchikaru";
    title.id = 'title';

    const content = document.createElement('div');
    content.innerText = txt;
    // wrapperBackground will not
    // affect the text because it is position:absolute.
    // therefore, we need an invisible text wrapper
    // that goes along with the width of the wrapperBackground
    // therefore, the content will be a bit more responsive.

    const textWrapper = document.createElement('div');
    textWrapper.id = 'text-wrapper-lander';
    textWrapper.style['width'] = wrapperBackground.style.width;

    textWrapper.appendChild(title);
    textWrapper.appendChild(content);

    wrapperBackground.appendChild(textWrapper);

    return wrapperBackground;
}

export default createFirstPageComponent;
