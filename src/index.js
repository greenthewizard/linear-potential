import './js/styles.js';
import * as showdown from 'showdown';
const mdConverter = new showdown.Converter();

let md = '#hello, markdown!##';
document.querySelector('body')
    .insertAdjacentHTML(
        'afterbegin',
        mdConverter.makeHtml(md));

document.querySelectorAll('a')
    .forEach((el) => {
        el.addEventListener('click', (e) => {
            let href = e.target.href;
            let anchor = href.substring(href.indexOf("#"));
            
            let $p = document.querySelector(anchor);
            $p.classList.toggle('reveal');
        });
    });