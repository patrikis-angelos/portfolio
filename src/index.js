import './reset.css';
import './styles.css';
import move from './logic/dragable';
import createItem from './logic/display';
import { enigma, weatherBot, store, tictactoeProject } from './logic/items';
import { createBoard, tictactoe } from './logic/tictactoe';

const elements = document.getElementsByClassName('dragable');
for (let i = 0; i < elements.length; i++) {
  move(elements[i]);
}

const item1 = createItem(enigma);
const item2 = createItem(weatherBot, true);
const item3 = createItem(store);
const item4 = createItem(tictactoeProject, true);

const projects = document.querySelector('#projects');
projects.appendChild(item1);
projects.appendChild(item2);
projects.appendChild(item3);
projects.appendChild(item4);

const game_board = createBoard();
const game_space = item4.querySelector('.img-container');
const reset_button = document.createElement('button');
reset_button.classList.add('reset-button');
reset_button.textContent = 'Reset Board';
game_board.appendChild(reset_button);
game_space.appendChild(game_board);
const board = document.querySelectorAll(".row div");

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', (e) => {
    tictactoe.handleClick(e);
  })
}

reset_button.addEventListener('click', () => {
  tictactoe.reset(board);
});