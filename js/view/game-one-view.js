import InitialGameView from '.././initial-game-view.js';
import FooterView from '.././view/footer-view.js';
import HeaderView from '.././view/header-view.js';
import {PHOTOS, model} from '.././data.js';

const Screens = {
  GAME_1: `game-1`,
  GAME_2: `game-2`,
  GAME_3: `game-3`
};

export default class GameOneView extends InitialGameView {
  constructor(name) {
    super();
    this.gameName = name;
  }

  get template() {
    let templ = ``;
    model.switchHeaderBig();

    switch (this.gameName) {
      case Screens.GAME_1:
        templ = `<div>
        ${new HeaderView().template}
        <div class="game">
          <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
          <form class="game__content">
            <div class="game__option">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 1" width="468" height="458">
              <label class="game__answer game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
            <div class="game__option">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 2" width="468" height="458">
              <label class="game__answer  game__answer--photo">
                <input name="question2" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--paint">
                <input name="question2" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          <div class="stats">
            <ul class="stats">
            ${model.answers.map((it) => `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </div>
        </div>
        ${new FooterView().template}
        </div>`;
        break;

      case Screens.GAME_2:
        templ = `<div>
        ${new HeaderView().template}
        <div class="game">
          <p class="game__task">Угадай, фото или рисунок?</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 1" width="705" height="455">
              <label class="game__answer  game__answer--photo">
                <input name="question1" type="radio" value="photo">
                <span>Фото</span>
              </label>
              <label class="game__answer  game__answer--wide  game__answer--paint">
                <input name="question1" type="radio" value="paint">
                <span>Рисунок</span>
              </label>
            </div>
          </form>
          <div class="stats">
            <ul class="stats">
            ${model.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </div>
        </div>
        ${new FooterView().template}
        </div>`;
        break;

      case Screens.GAME_3:
        templ = `<div>
        ${new HeaderView().template}
        <div class="game">
          <p class="game__task">Найдите рисунок среди изображений</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option  game__option--selected">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 1" width="304" height="455">
            </div>
            <div class="game__option">
              <img src=${PHOTOS[model.photoCounter++]} alt="Option 1" width="304" height="455">
            </div>
          </form>
          <div class="stats">
          <ul class="stats">
          ${model.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
          </ul>
          </div>
        </div>
        ${new FooterView().template}
        </div>`;
        break;
    }

    return templ;
  }

  bind() {
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });

    switch (this.gameName) {
      case Screens.GAME_1:
      case Screens.GAME_2:
        this._element.addEventListener(`change`, () => {
          this.getClick();
        });
        break;

      case Screens.GAME_3:
        this.getClick();
        break;
    }
  }

  updateTimer(time) {
    const timeBox = this.element.querySelector(`.game__timer`);
    timeBox.textContent = time;
  }

}
