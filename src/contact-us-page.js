/* eslint-disable indent */
import OwnerImage from './imgs/owner.jpg';
import footerComponent from './footer.js';

const contactPage = () => {
    let _firstRow = null;
    let _secondRow = null;

    const _initContactPage = () => {
        const firstRow = document.createElement('div');
        const secondRow = document.createElement('div');

        const contactPageWrapper = document.createElement('div');
        contactPageWrapper.id = 'contact-page-wrapper';

        const body = document.querySelector('body');

        const footer = footerComponent();

        firstRow.id = 'contact-first-row';
        secondRow.id = 'contact-second-row';

        const imageOfOwner = new Image();
        imageOfOwner.src = OwnerImage;

        // firstRow.appendChild(imageOfOwner);

        contactPageWrapper.appendChild(firstRow);
        contactPageWrapper.appendChild(secondRow);
        contactPageWrapper.appendChild(footer);

        body.appendChild(contactPageWrapper);

        _firstRow = firstRow;
        _secondRow = secondRow;
    };

    /**
     * Sets elements of the contact page
     * to 'display: none' in order to transition
     * from the contact page to another page.
     */
    const toggleContactPage = () => {
        _firstRow.classList.toggle('invisible');
        _secondRow.classList.toggle('invisible');
    };

    const getFirstRowWrapper = () => _firstRow;
    const getSecondRowWrapper = () => _secondRow;

    _initContactPage();
    toggleContactPage();

    return {
        getFirstRowWrapper,
        getSecondRowWrapper,
        toggleContactPage,
    };
};

export default contactPage;
