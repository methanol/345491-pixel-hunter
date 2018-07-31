import InitialGameView from '../initial-game-view.js';
import FooterView from '../view/footer-view.js';
import HeaderView from '../view/header-view.js';
import {model} from '../data.js';
import {Screens, Frames} from '../permanent.js';

export default class GameView extends InitialGameView {
  constructor(name, inputStates) {
    super();
    this.gameName = name;
    this.inputStates = inputStates;
  }

  get template() {
    let templ = ``;
    model.switchHeaderBig();

    switch (this.gameName) {
      case Screens.GAME_1:
        templ = `<div>
        ${new HeaderView().template}
        <div class="game">
          <p class="game__task">${this.inputStates[model.counter].question}</p>
          <form class="game__content">
            <div class="game__option">
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
          <p class="game__task">${this.inputStates[model.counter].question}</p>
          <form class="game__content  game__content--wide">
            <div class="game__option">
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
          <p class="game__task">${this.inputStates[model.counter].question}</p>
          <form class="game__content  game__content--triple">
            <div class="game__option">
            </div>
            <div class="game__option">
            </div>
            <div class="game__option">
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

  resizeImage() {
    switch (this.gameName) {
      case Screens.GAME_1:
        const firstGameOptions = this.element.querySelectorAll(`.game__option`);

        firstGameOptions.forEach((it, ind) => {
          this.changeStyle(it, Frames.FRAME1, ind);
        });
        break;

      case Screens.GAME_2:
        const secondGameOption = this.element.querySelector(`.game__option`);

        this.changeStyle(secondGameOption, Frames.FRAME2);
        break;

      case Screens.GAME_3:
        const thirdGameOptions = this.element.querySelectorAll(`.game__option`);

        thirdGameOptions.forEach((it, ind) => {
          this.changeStyle(it, Frames.FRAME3, ind);
        });
        break;
    }

  }

  changeStyle(elem, frame, ind = 0) {
    elem.setAttribute(`style`, `width: ${frame.width}px; height: ${frame.height}px; background: url(${this.inputStates[model.counter].answers[ind].image.url}) no-repeat center; background-origin: content-box; background-size: contain`);
  }

  bind() {
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });

    switch (this.gameName) {
      case Screens.GAME_1:

        this._element.addEventListener(`change`, () => {
          this.getClick();
        });
        break;

      case Screens.GAME_2:

        this._element.addEventListener(`change`, () => {
          this.getClick();
        });
        break;

      case Screens.GAME_3:
        const options3 = this.element.querySelectorAll(`.game__option`);

        options3.forEach((it) => {
          it.addEventListener(`mousedown`, () => {
            it.classList.add(`game__option--selected`);
            this.getClick();
          });
        });
        break;
    }
  }

  updateTimer(time) {
    const timeBox = this.element.querySelector(`.game__timer`);
    timeBox.textContent = time;
    if (time < 6) {
      timeBox.classList.add(`game__timer--blink`);
    }
  }

}
