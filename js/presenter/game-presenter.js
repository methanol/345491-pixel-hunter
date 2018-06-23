import GameOneView from '.././view/game-one-view.js';
import {workState} from '.././data.js';
import {Screens} from '.././permanent.js';
import {Velocities} from '.././permanent.js';

export default class GamePresenter {
  constructor(data, name) {
    this.data = data;
    this.view = new GameOneView(name);
    this.gameName = name;
  }

  checkAnswer(answerCode) {
    if (answerCode === workState.keyCodes[workState.counter]) {
      workState.answers[workState.counter] = Velocities.NORMAL_MODE;
    } else {
      workState.answers[workState.counter] = Velocities.WRONG_MODE;
      if (workState.lives >= 0) {
        --workState.lives;
      }
    }

    workState.counter++;
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

            this.checkAnswer([...questions1, ...questions2].map((it) => it.checked ? 1 : 0).join(``));

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_2:
        this.view.getClick = () => {
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if ((questions1[0].checked) || (questions1[1].checked)) {

            this.checkAnswer([...questions1].map((it) => it.checked ? 1 : 0).join(``));

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_3:
        this.view.getClick = () => {
          const options = this.view._element.querySelectorAll(`.game__option`);

          options.forEach((it) => {
            it.addEventListener(`click`, () => {

              this.checkAnswer([...options].map((item) => (it === item) ? 1 : 0).join(``));

              this.data.showNextScreen();
            });
          });
        };
        break;
    }

    return this.view.element;
  }
}
