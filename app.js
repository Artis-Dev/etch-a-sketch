function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
  const gameContainer = document.getElementById('game-container');

  gameContainer.innerHTML = '';

  gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gameContainer.classList.add(cssClass);

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gameContainer.appendChild(div);
  }
}

function chooseSize() {
  const sizeButtons = document.querySelectorAll('.size');

  const small = 16 * 22;
  const medium = 32 * 44;
  const big = 64 * 88;

  sizeButtons[1].classList.add('active-button');

  function selectButton(button) {
    sizeButtons.forEach((selection) => {
      selection.classList.remove('active-button');
    });
    button.classList.add('active-button');
  }

  sizeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('small')) {
        generateGrid(small, 'small-grid');
        selectButton(selection);
      } else if (selection.classList.contains('medium')) {
        generateGrid(medium, 'medium-grid-default');
        selectButton(selection);
      } else {
        generateGrid(big, 'big-grid');
        selectButton(selection);
      }
    });
  });
}

function startGame() {
  generateGrid();
  chooseSize();
}

startGame();
