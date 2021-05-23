import './reset.css';
import './styles.css';
import move from './logic/dragable';
import createItem from './logic/display';
import { enigma, weatherBot, store } from './logic/items';

const elements = document.getElementsByClassName('dragable');
for (let i = 0; i < elements.length; i++) {
  move(elements[i]);
}

const item1 = createItem(enigma);
const item2 = createItem(weatherBot, true);
const item3 = createItem(store);

const projects = document.querySelector('#projects');
projects.appendChild(item1);
projects.appendChild(item2);
projects.appendChild(item3);