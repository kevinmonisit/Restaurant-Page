// import './css/initial-page.css';
// import component from './initial-page.js';
import headerComponent from './header.js';
import 'normalize.css';
import createFirstPageComponent from './initial-page.js';

document.body.appendChild(headerComponent());
document.body.appendChild(createFirstPageComponent());
