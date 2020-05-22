function generateGrid() {
  const gameContainer = document.getElementById('game-container');

  const small = 16 * 22;
  const medium = 32 * 44;
  const big = 64 * 88;

  for (let i = 0; i < medium; i++) {
    const div = document.createElement('div');
    gameContainer.appendChild(div);
  }
}

generateGrid();
