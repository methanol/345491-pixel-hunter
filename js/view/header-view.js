import InitialGameView from '../initial-game-view.js';
import {Times} from '../permanent.js';

const MAX_LIVES = 3;

export default class HeaderView extends InitialGameView {
  constructor(shadowModel) {
    super();
    this.isGameScreen = shadowModel.isGameScreen;
    this.lives = shadowModel.lives;
  }

  get template() {
    return (this.isGameScreen === false) ? `<header class="header">
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
  <h1 class="game__timer">${Times.START_TIME}</h1>
  <div class="game__lives">
    ${new Array(MAX_LIVES - this.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    ${new Array(this.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
  </div>
  </header>`;
  }

  bind() {
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });
  }

  updateTimer(time) {
    const timeBox = this.element.querySelector(`.game__timer`);
    timeBox.textContent = time;
    if (time < 6) {
      timeBox.classList.add(`game__timer--blink`);
    }
  }
}
