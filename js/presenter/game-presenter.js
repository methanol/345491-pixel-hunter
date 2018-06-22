import GameOneView from '.././view/game-one-view.js';
// import GameTwoView from '.././view/game-two-view.js';
// import GameThreeView from '.././view/game-three-view.js';
import {workState} from '.././data.js';

const Screens = {
  GAME_1: `game-1`,
  GAME_2: `game-2`,
  GAME_3: `game-3`
};

export default class GamePresenter {
  constructor(data, name) {
    this.data = data;
    this.view = new GameOneView(name);
    this.gameName = name;
  }

  create() {
    this.view.getBackClick = () => {
      this.data.goBack();
    };

    switch (this.gameName) {
      case Screens.GAME_1:
        this.view.getClick = () => {
          const questions2 = this.view._element.querySelectorAll(`input[name="question2"]`);
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

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

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_2:
        this.view.getClick = () => {
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

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

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_3:
        this.view.getClick = () => {
          const options = this.view._element.querySelectorAll(`.game__option`);

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

              this.data.showNextScreen();
            });
          });
        };
        break;


    }

    return this.view.element;

  }
}
