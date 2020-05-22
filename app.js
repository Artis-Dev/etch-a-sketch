function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
  const gameContainer = document.getElementById('game-container');

  gameContainer.innerHTML = '';

  gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gameContainer.classList.add(cssClass);

  for (let i = 0; i < size; i++) {
    const div = document.createElement('div');
    gameContainer.appendChild(div);
  }
}

function chooseSize() {
  const sizeButtons = document.querySelectorAll('.size');

  const small = 16 * 22;
  const medium = 32 * 44;
  const big = 64 * 88;

  sizeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('small')) {
        generateGrid(small, 'small-grid');
      } else if (selection.classList.contains('medium')) {
        generateGrid(medium, 'medium-grid-default');
      } else {
        generateGrid(big, 'big-grid');
      }
    });
  });
}

function startGame() {
  generateGrid();
  chooseSize();
}

startGame();
