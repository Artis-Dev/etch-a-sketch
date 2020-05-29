const sizeButtons = document.querySelectorAll('.size');
const modeButtons = document.querySelectorAll('.mode');

function generateGrid(size = 32 * 44, cssClass = 'medium-grid-default') {
  const gameContainer = document.getElementById('grid-container');

  gameContainer.innerHTML = '';

  gameContainer.classList.remove('small-grid', 'medium-grid-default', 'big-grid');
  gameContainer.classList.add(cssClass);

  for (let i = 0; i < size; i += 1) {
    const div = document.createElement('div');
    gameContainer.appendChild(div);
  }
}

function startPainting() {
  const gridItems = document.querySelectorAll('#grid-container > div');

  gridItems.forEach((item) => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('classic-paint');
    });
  });
}

function selectButton(button) {
  if (button.classList.contains('mode')) {
    modeButtons.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  } else {
    sizeButtons.forEach((selection) => {
      selection.classList.remove('active-button');
    });
  }
  button.classList.add('active-button');
}

function changeSize() {
  const small = 16 * 22;
  const medium = 32 * 44;
  const big = 64 * 88;

  sizeButtons[1].classList.add('active-button');

  sizeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('small')) {
        generateGrid(small, 'small-grid');
        startPainting();
        selectButton(selection);
      } else if (selection.classList.contains('medium')) {
        generateGrid(medium, 'medium-grid-default');
        startPainting();
        selectButton(selection);
      } else {
        generateGrid(big, 'big-grid');
        startPainting();
        selectButton(selection);
      }
    });
  });
}

function changeMode() {
  modeButtons[0].classList.add('active-button');

  modeButtons.forEach((selection) => {
    selection.addEventListener('click', () => {
      if (selection.classList.contains('small')) {
        startPainting();
        selectButton(selection);
      } else if (selection.classList.contains('medium')) {
        startPainting();
        selectButton(selection);
      } else {
        startPainting();
        selectButton(selection);
      }
    });
  });
}

function startGame() {
  generateGrid();
  startPainting();
  changeSize();
  changeMode();
  // erase();
}

startGame();
