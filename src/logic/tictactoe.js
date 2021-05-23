import player from './player';
import bot from './bot';
import './style.css';
import state from './state';

const board = document.querySelectorAll(".row div");
const reset_button = document.querySelector("button");
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
