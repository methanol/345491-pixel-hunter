import AbstractView from '.././abstract-view.js';
import GameOneView from '.././view/game-one-view.js';
import GameTwoView from '.././view/game-two-view.js';
import GameThreeView from '.././view/game-three-view.js';
import FooterView from '.././view/footer-view.js';
import HeaderView from '.././view/header-view.js';
import {workState} from '.././data.js';

const Screens = {
  GAME_1: `game-1`,
  GAME_2: `game-2`,
  GAME_3: `game-3`
};

export default class GamePresenter extends AbstractView {
  constructor(name) {
    super();
    this.gameName = name;
  }

  get template() {
    let templ = ``;
    workState.isGameScreen = true;

    switch (this.gameName) {
      case Screens.GAME_1:
        templ = `<div>
        ${new HeaderView().template}
        ${new GameOneView().template}
        ${new FooterView().template}
        </div>`;
        break;

      case Screens.GAME_2:
        templ = `<div>
        ${new HeaderView().template}
        ${new GameTwoView().template}
        ${new FooterView().template}
        </div>`;
        break;

      case Screens.GAME_3:
        templ = `<div>
        ${new HeaderView().template}
        ${new GameThreeView().template}
        ${new FooterView().template}
        </div>`;
        break;
    }

    return templ;
  }

  bind(element, data) {
    switch (this.gameName) {
      case Screens.GAME_1:
      { const questions2 = element.querySelectorAll(`input[name="question2"]`);
        const questions1 = element.querySelectorAll(`input[name="question1"]`);
        const btnBack = element.querySelector(`button.back`);

        btnBack.addEventListener(`click`, () => {
          data.goBack();
        });

        element.addEventListener(`change`, () => {
          if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {

            const answerCode = [...questions1, ...questions2].map((it) => it.checked ? 1 : 0).join(``);

            if (answerCode === workState.keyCodes[workState.counter]) {
              workState.answers[workState.counter] = `correct`;
            } else {
              workState.answers[workState.counter] = `wrong`;
              if (workState.lives >= 0) {
                --workState.lives;
              }
            }

            workState.counter++;

            data.showNextScreen();
          }
        });
        break; }

      case Screens.GAME_2:
      { const questions1 = element.querySelectorAll(`input[name="question1"]`);
        const btnBack = element.querySelector(`button.back`);

        btnBack.addEventListener(`click`, () => {
          data.goBack();
        });

        element.addEventListener(`change`, () => {
          if ((questions1[0].checked) || (questions1[1].checked)) {

            const answerCode = [...questions1].map((it) => it.checked ? 1 : 0).join(``);

            if (answerCode === workState.keyCodes[workState.counter]) {
              workState.answers[workState.counter] = `correct`;
            } else {
              workState.answers[workState.counter] = `wrong`;
              if (workState.lives >= 0) {
                --workState.lives;
              }
            }

            workState.counter++;

            data.showNextScreen();
          }
        });
        break; }

      case Screens.GAME_3:
        const options = element.querySelectorAll(`.game__option`);
        const btnBack = element.querySelector(`button.back`);

        btnBack.addEventListener(`click`, () => {
          data.goBack();
        });

        options.forEach((it) => {
          it.addEventListener(`click`, () => {

            const answerCode = [...options].map((item) => (it === item) ? 1 : 0).join(``);

            if (answerCode === workState.keyCodes[workState.counter]) {
              workState.answers[workState.counter] = `correct`;
            } else {
              workState.answers[workState.counter] = `wrong`;
              if (workState.lives >= 0) {
                --workState.lives;
              }
            }

            workState.counter++;

            data.showNextScreen();
          });
        });
        break;
    }
  }
}
