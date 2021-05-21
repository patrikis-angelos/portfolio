import './reset.css';
import './styles.css';
import enigma from './images/enigma.png';
import tic from './images/Tictactoe.png';
import move from './dragable';
import createItem from './display';

const elements = document.getElementsByClassName('dragable');
for (let i = 0; i < elements.length; i++) {
  move(elements[i]);
}

const desc = 'EniGma? is a Desktop app where users can create and view different scientific articles. Singed-in users can up-vote articles. The one with the most votes will be on the home page.';
const links = [
  {
    url: 'https://enigma-articles.herokuapp.com/',
    text: 'See project',
  },
  {
    url: 'https://github.com/patrick-angelos/Enigma',
    text: 'Github',
  },
];
const item1 = createItem(
  enigma,
  'Enigma?',
  ['Desktop app', 'Full Stack', '2021'],
  desc,
  ['RoR', 'HTML', 'SCSS'],
  links,
);

const container = document.querySelector('main .container');
container.appendChild(item1);