import './js/styles.js';
import * as showdown from 'showdown';
const mdConverter = new showdown.Converter();

let md = '#hello, markdown!##';
document.querySelector('body')
    .insertAdjacentHTML(
        'afterbegin',
        mdConverter.makeHtml(md));

console.log('All good!');