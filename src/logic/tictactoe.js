import player from './player';
import bot from './bot';
import state from './state';

const createBoard = () => {
  const game = document.createElement('div');
  game.classList.add('game');
  game.id = 'game';
  for (let i = 0; i < 3; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    for (let j = i * 3; j < i * 3 + 3; j += 1) {
      const cell = document.createElement('div');
      cell.id = j;
      row.appendChild(cell);
    }
    game.appendChild(row);
  }
  return game;
};

const tictactoe = (() => {
  let game = state();
  const player1 = player('Player1', 'X');
  const player2 = bot('Player2', 'O');
  let currentPlayer = player1;
  let winner = false;
  let count = 0;

  const reset = (board) => {
    if (currentPlayer === player2 && !winner) return;
    for (let i = 0; i < board.length; i += 1) {
      board[i].textContent = '';
    }
    game = state();
    winner = false;
    count = 0;
    currentPlayer = player1;
  };

  const botTurn = () => {
    setTimeout(() => {
      const move = player2.chooseMove(game);
      const cell = document.getElementById(`${move}`);
      player2.makeMove(move, game, cell);
      count += 1;
      if (game.win()) {
        winner = player2;
        return winner;
      }

      currentPlayer = player1;
      return false;
    }, 1000);
  };

  const handleClick = (e) => {
    if (winner) return winner;
    if (currentPlayer === player2) return false;

    const cell = e.target;
    const move = cell.id;
    if (!game.checkMove(move)) return false;

    currentPlayer.makeMove(move, game, cell);
    count += 1;
    if (game.win()) {
      winner = currentPlayer;
      return winner;
    }
    if (count >= 9) {
      winner = 'draw';
      return winner;
    }

    currentPlayer = player2;
    winner = botTurn();
    return winner;
  };

  return { reset, botTurn, handleClick };
})();

export { createBoard, tictactoe };