// import './css/initial-page.css';
// import component from './initial-page.js';
import headerComponent from './header.js';
import 'normalize.css';
import createFirstPageContent from './initial-page.js';

// const html = document.querySelector('html');
// html.translate = 'no';

document.body.appendChild(headerComponent());

const frontPageContent = document.getElementById('front-content');
frontPageContent.appendChild(createFirstPageContent());
