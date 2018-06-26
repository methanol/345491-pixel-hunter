import InitialGameView from '.././initial-game-view.js';
import {model} from '.././data.js';
import CreateTimer from '.././create-timer.js';
import {Times} from '.././permanent.js';

const MAX_LIVES = 3;

export default class HeaderView extends InitialGameView {
  get template() {
    return (!model.isGameScreen) ? `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>` : `<header class="header">
  <div class="header__back">
    <button class="back">
      <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
      <img src="img/logo_small.svg" width="101" height="44">
    </button>
  </div>
  <h1 class="game__timer">${new CreateTimer(Times.START_TIME).time}</h1>
  <div class="game__lives">
    ${new Array(MAX_LIVES - model.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(model.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
  </header>`;
  }
}
