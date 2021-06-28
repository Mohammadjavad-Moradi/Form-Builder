
import './page.css';
import {loaderAjax} from './components/autofill/autofill';
import {save, state} from './components/state/state';
import CreateSection from './components/sectionCreator/sectionCreator';
import Header from './components/header/header';

const header = new Header;
const createsection = new CreateSection;

require("babel-core/register");
require("babel-polyfill");
var t = state.t;
var i = state.i;

window.addEventListener('load', (name, url) => {
    if (!url) url = window.location.href;
    name = 'id';
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) {
        createsection.sectionCreator(i, t);
        return null;
    }
    if (!results[2]) return '';
    let query = decodeURIComponent(results[2].replace(/\+/g, ' '));
    console.log(`id:${query}`)
    if ( query) {
        loaderAjax(query) 
    }
})

header.editHeader();
header.insertImages();
header.closeHeaderModal();

document.querySelector(`#save`).addEventListener('click', () => {
    save()
})


