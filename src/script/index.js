import _ from 'lodash';
import sum from './sum.js';
import Icon from '../images/loki.jpg';
import '../css/style.css';
import "../scss/style.scss";

function createDiv() {
    sum();
    var element = document.createElement('div');
    element.innerHTML = "<h1>Welcome webpack</h1>";
    element.classList.add('text-style');

    return element;
}
document.body.appendChild(createDiv());

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    return element;
}

document.body.appendChild(component());