import player from './player';
import state from './state';

const bot = (name, symbol) => {
  const enemy = player('Player', 'X');
  const { makeMove, getInfo } = player(name, symbol);

  const randomMove = (s) => {
    let move = -1;
    while (!s.checkMove(move)) {
      move = Math.floor(Math.random()*8);
    }
    return move;
  }

  const possibleMoves = (s) => {
    const pm = []
    const board = s.getBoard();
    for (let i = 0; i < board.length; i++) {
      if (board[i] === '') pm.push(i)
    }
    return pm;
  }

  const testMoves = (s) => {
    const moves = possibleMoves(s);
    const ratings = []
    for (let i = 0; i < moves.length; i ++) {
      let score = 0;
      makeMove(moves[i], s);
      if (s.win()) return moves[i];
      score = rate(s, 'player');
      ratings.push({move: moves[i], score});
      s.setCell(moves[i], '');
    }
    const move = bestMove(ratings);
    return move;
  }

  const rate = (s, turn) => {
    const moves = possibleMoves(s);
    if (moves.length === 0) return 0;
    const ratings = []
    let score = 0;
    if (turn === 'bot') {
      for (let i = 0; i < moves.length; i ++) {
        makeMove(moves[i], s);
        if (s.win()) {
          s.setCell(moves[i], '');
          return 1;
        }
        score = rate(s, 'player');
        ratings.push(score);
        s.setCell(moves[i], '');
      }
      const max = Math.max(...ratings);
      return max;
    } else {
      for (let i = 0; i < moves.length; i ++) {
        enemy.makeMove(moves[i], s);
        if (s.win()){
          s.setCell(moves[i], '');
          return -1;
        }
        score = rate(s, 'bot');
        ratings.push(score);
        s.setCell(moves[i], '');
      }
      const min = Math.min(...ratings);
      return min;
    }
  }

  const bestMove = (moves) => {
    let max = -10;
    const best = [];
    for (let i = 0; i < moves.length; i++) {
      const { score } = moves[i];
      max = score > max ? score : max;
    }
    for (let i = 0; i < moves.length; i++) {
      const { move, score } = moves[i];
      if (score === max) best.push(move);
    }
    const move = Math.floor(Math.random()*best.length);
    return best[move];
  }

  const chooseMove = (s) => {
    const bot_state = state();
    bot_state.setBoard(s.getBoard());
    const move = testMoves(bot_state);
    return move
  }

  return { makeMove, getInfo, randomMove, chooseMove }
}

export default bot;