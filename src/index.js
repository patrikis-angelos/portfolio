import './reset.css';
import './styles.css';
import move from './logic/dragable';
import createItem from './logic/display';
import {
  enigma, weatherBot, store, tictactoeProject,
} from './logic/items';
import { createBoard, tictactoe } from './logic/tictactoe';

const elements = document.getElementsByClassName('dragable');
for (let i = 0; i < elements.length; i += 1) {
  move(elements[i]);
}

const item1 = createItem(enigma);
const item2 = createItem(tictactoeProject, true);
const item3 = createItem(weatherBot);
const item4 = createItem(store, true);

const projects = document.querySelector('#projects');
projects.appendChild(item1);
projects.appendChild(item2);
projects.appendChild(item3);
projects.appendChild(item4);

const gameBoard = createBoard();
const gameSpace = item2.querySelector('.img-container');
const resetButton = document.createElement('button');
resetButton.classList.add('reset-button');
resetButton.textContent = 'Reset Board';
gameBoard.appendChild(resetButton);
gameSpace.appendChild(gameBoard);
const board = document.querySelectorAll('.row div');

for (let i = 0; i < board.length; i += 1) {
  board[i].addEventListener('click', (e) => {
    tictactoe.handleClick(e);
  });
}

resetButton.addEventListener('click', () => {
  tictactoe.reset(board);
});