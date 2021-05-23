import './reset.css';
import './styles.css';
//import move from './logic/dragable';
import createItem from './logic/display';
import { enigma, weatherBot, store, tictactoe } from './logic/items';
import player from './logic/player';
import bot from './logic/bot';
import state from './logic/state';

// const elements = document.getElementsByClassName('dragable');
// for (let i = 0; i < elements.length; i++) {
//   move(elements[i]);
// }

const createBoard = () => {
  const game = document.createElement('div');
  game.id = 'game';
  for (let i = 0; i < 3; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    for(let j = i*3; j < i*3 + 3; j++) {
      const cell = document.createElement('div');
      cell.id = j;
      row.appendChild(cell);
    }
    game.appendChild(row);
  }
  return game;
}


const item1 = createItem(enigma);
const item2 = createItem(weatherBot, true);
const item3 = createItem(store);
const item4 = createItem(tictactoe, true);

const projects = document.querySelector('#projects');
projects.appendChild(item1);
projects.appendChild(item2);
projects.appendChild(item3);
projects.appendChild(item4);

const game_board = createBoard();
const game_space = item4.querySelector('.img-container');
game_space.appendChild(game_board);
const board = document.querySelectorAll(".row div");
const reset_button = document.createElement('button');
reset_button.textContent = 'Reset';
game_space.appendChild(reset_button);
let game = state();
const player1 = player('Player1', 'X');
const player2 = bot('Player2', 'O');
let current_player = player1;
let winner = false;
let count = 0;

const reset = () => {
  if (current_player === player2 && !winner) return;
  for (let i = 0; i < board.length; i++) {
    board[i].textContent = '';
  }
  game = state();
  winner = false;
  count = 0;
  current_player = player1;
}

const botTurn = () => {
  setTimeout(function() {
    const move = player2.chooseMove(game);
    const cell = document.getElementById(`${move}`);
    player2.makeMove(move, game, cell);
    count += 1
    if (game.win()) return winner = current_player;

    current_player = player1;
  }, 1000);
}

const handleClick = (e) => {
  if (winner) return winner;
  if (current_player === player2) return false;

  const cell = e.target;
  const move = cell.id;
  if (!game.checkMove(move)) return;

  current_player.makeMove(move, game, cell);
  count += 1;
  console.log('next');
  if (game.win()) return winner = current_player;
  if (count >= 9) return winner = 'draw';
  
  current_player = player2;
  botTurn();
}

for (let i = 0; i < board.length; i++) {
  board[i].addEventListener('click', handleClick.bind(this))
}

reset_button.addEventListener('click', reset);