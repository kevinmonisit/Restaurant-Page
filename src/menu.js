/* eslint-disable indent */

import ramen1 from './imgs/ramen1.jpg';
import ramen2 from './imgs/ramen2.jpg';
import ramen3 from './imgs/ramen3.jpeg';
import ramen4 from './imgs/ramen4-shoyu.png';
import original from './imgs/original.jpeg';
import './css/menu.css';
import footer from './footer.js';

const menuPage = () => {
    let _menuPageWrapper = null;

    const ramenImageOriginal = original;

    const ramenImages = {
        '#1': ramen1,
        '#2': ramen2,
        '#3': ramen3,
        '#4': ramen4,
    };

    const initMenu = () => {
        _menuPageWrapper = document.createElement('div');
        _menuPageWrapper.id = 'menu-page-wrapper';
        const body = document.querySelector('body');

        // row one shows the title
        const rowOne = document.createElement('div');
        rowOne.innerText = 'MENU';
        rowOne.style['font-family'] = 'Open Sans Bold';
        rowOne.style['font-size'] = '2rem';

        // row two shows the main specialty (Naruto's go-to)
        const rowTwo = document.createElement('div');
        rowTwo.id = 'menu-row-two';

        // row three shows a grid of other options
        const rowThree = document.createElement('div');
        rowThree.id ='menu-row-three';

        // ========== ROW configurations =======

        // ROW TWO ======================
        const ramenOriginal = new Image();
        ramenOriginal.src = original;
        ramenOriginal.id = 'ramen-original-image';
        rowTwo.appendChild(ramenOriginal);

        const ramenOriginalTitle = document.createElement('div');
        ramenOriginalTitle.innerText = 'Chef\'s Specialty: Number 0';
        ramenOriginalTitle.style['margin-top'] = '10px';
        ramenOriginalTitle.style['margin-bottom'] = '2rem';
        ramenOriginalTitle.style['font-size'] = '1.5rem';
        ramenOriginalTitle.style['font-family'] = `'Open Sans', Arial`;

        rowTwo.appendChild(ramenOriginalTitle);

        // ROW THREE ======================
        for (const key in ramenImages) {
            if ({}.hasOwnProperty.call(ramenImages, key)) {
                const cell = document.createElement('div');
                const ramenImage = new Image();
                ramenImage.src = ramenImages[key];

                cell.appendChild(ramenImage);
                cell.classList.add('ramen-image-grid');
                cell.id = `ramen-image-${key.slice(1)}`;
                cell.style['text-align'] = 'center';

                const subtitle = document.createElement('div');
                subtitle.innerHTML = key;
                cell.appendChild(subtitle);

                rowThree.appendChild(cell);
            }
        }

        _menuPageWrapper.appendChild(rowOne);
        _menuPageWrapper.appendChild(rowTwo);
        _menuPageWrapper.appendChild(rowThree);

        const _footer = footer();
        _menuPageWrapper.appendChild(_footer);

        body.appendChild(_menuPageWrapper);
    };


    const getMenuWrapper = () => _menuPageWrapper;
    const toggleMenuPage = () => {
        _menuPageWrapper.classList.toggle('invisible');
    };

    initMenu();
    toggleMenuPage();

    return {
        getMenuWrapper,
        toggleMenuPage,
    };
};

export default menuPage;
