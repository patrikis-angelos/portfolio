const state = () => {
  const WIN_CASES = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  let board = Array.apply(null, Array(9)).map(() => '');

  const checkMove = (move) => {
    if (move < 0 || move > 8) return false;
    if (board[move] === '') {
      return true;
    }
    return false;
  }

  const getBoard = () => {
    return board;
  }

  const setBoard = (b) => {
    board = [...b];
  }

  const setCell = (move, symbol) => {
    board[move] = symbol;
  }

  const win = () => {
    for (let w = 0; w < WIN_CASES.length; w++) {
      const c = WIN_CASES[w]
      if (board[c[0]] != '' && board[c[0]] === board[c[1]] && board[c[0]] === board[c[2]]) {
        return true;
      }
    }
    return false;
  }

  return { win, checkMove, setBoard, setCell, getBoard }
}

export default state;