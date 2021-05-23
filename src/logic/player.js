const player = (name, symbol) => {
  const getInfo = () => {return { name, symbol }}

  const makeMove = (move, state, cell = null) => {
    state.setCell(move, symbol);
    if (cell) cell.textContent = symbol;
  }

  return { getInfo, makeMove }
}

export default player;