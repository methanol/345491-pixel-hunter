import {render} from '.././util.js';
import {startState} from '.././data.js';

const mainScreen = document.querySelector(`.central`);
const MAX_LIVES = 3;

const headerTemplate = (game) => {
  return `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${game.time}</h1>
  <div class="game__lives">
    ${new Array(MAX_LIVES - game.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(game.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
</header>`;
};

const headerShortTemplate = () => {
  return `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
</header>`;
};

mainScreen.insertAdjacentElement(`beforebegin`, render(headerTemplate(startState)));
