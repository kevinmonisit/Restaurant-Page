/* eslint-disable indent */

/**
 * Creates the initial page.
 * @return {Element} test
 */
function component() {
    const test = document.createElement('div');
    test.id = 'hello';
    test.innerText = 'hello';
    return test;
}

export default component;
