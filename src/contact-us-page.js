/* eslint-disable indent */
import OwnerImage from './imgs/owner.jpg';
import footerComponent from './footer.js';
import './css/contactUs.css';
import txt from './loremIpsum.txt';
import storeImage from './imgs/store.jpg';

const contactPage = () => {
    let _firstRow = null;
    let _secondRow = null;

    let contactPageWrapper = null;

    const _initContactPage = () => {
        const firstRow = document.createElement('div');
        const secondRow = document.createElement('div');

        contactPageWrapper = document.createElement('div');
        contactPageWrapper.id = 'contact-page-wrapper';

        const body = document.querySelector('body');

        const footer = footerComponent();

        _initFirstRow(firstRow);
        _initSecondRow(secondRow);
        contactPageWrapper.appendChild(firstRow);
        contactPageWrapper.appendChild(secondRow);
        contactPageWrapper.appendChild(footer);

        body.appendChild(contactPageWrapper);

        _firstRow = firstRow;
        _secondRow = secondRow;
    };

    const _initFirstRow = (firstRow) => {
        firstRow.id = 'contact-first-row';

        const imageOfOwner = new Image();
        imageOfOwner.src = OwnerImage;
        imageOfOwner.id = 'owner-image';

        const imageDivWrapper = document.createElement('div');
        imageDivWrapper.id = 'owner-image-wrapper';
        imageDivWrapper.appendChild(imageOfOwner);

        let textContent = txt;
        textContent += `<br><br>
        <span id=\'owner-text\'>Teuchi</span><br>
        Owner of Ramen Ichiraku`;
        const textContentWrapper = document.createElement('div');
        textContentWrapper.id ='contact-us-first-row-text';
        textContentWrapper.innerHTML = textContent;

        firstRow.appendChild(imageDivWrapper);
        firstRow.appendChild(textContentWrapper);
    };

    const _initSecondRow = (secondRow) => {
        secondRow.id = 'contact-second-row';

        const info = {
            'Contact': {
                reference: null,
                content: `(192) 209 1938<br>
                               ramen.ichiraku@hidden.leaf.io`,
            },
            'Hours': {
                reference: null,
                content: 'Open all day, everyday.',
            },
            'Location': {
                reference: null,
                content: 'Konohagakure, Hidden Leaf Village',
            },
        };

        const secondRowContentWrapper = document.createElement('div');
        secondRowContentWrapper.id = 'second-content-wrapper';

        for (const key in info) {
            if ({}.hasOwnProperty.call(info, key)) {
                const infoElement = document.createElement('div');
                infoElement.id = key;

                let textContent = `<span class='bold'>${key}</span><br>`;
                textContent += info[key].content;

                infoElement.innerHTML = textContent;
                infoElement.id = `contact-${key}`;
                info[key].reference = infoElement;

                secondRowContentWrapper.appendChild(infoElement);
            }
        }

        secondRow.appendChild(secondRowContentWrapper);

        const imageOfStore = new Image();
        imageOfStore.id = 'image-of-store';
        imageOfStore.src = storeImage;
        secondRow.appendChild(imageOfStore);
    };

    /**
     * Sets elements of the contact page
     * to 'display: none' in order to transition
     * from the contact page to another page.
     */
    const toggleContactPage = () => {
        contactPageWrapper.classList.toggle('invisible');
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
