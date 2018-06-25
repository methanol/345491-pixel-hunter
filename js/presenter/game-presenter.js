import GameOneView from '.././view/game-one-view.js';
import {gamer1} from '.././data.js';
import {Screens} from '.././permanent.js';
import {Velocities} from '.././permanent.js';
import CreateTimer from '.././create-timer.js';

const START_TIME = 30;
const FAST_TIME = 20;
const SLOW_TIME = 10;

export default class GamePresenter {
  constructor(data, name) {
    this.data = data;
    this.view = new GameOneView(name);
    this.gameName = name;
    this.timing = new CreateTimer(START_TIME);
  }

  /* checkAnswer(answerCode) {
    if (answerCode === workState.keyCodes[workState.counter]) {
      workState.answers[workState.counter] = Velocities.NORMAL_MODE;
    } else {
      workState.answers[workState.counter] = Velocities.WRONG_MODE;
      if (workState.lives >= 0) {
        --workState.lives;
      }
    }

    workState.counter++;
  }*/

  checkAnswer(answerCode, stopValue) {
    if (answerCode === gamer1._keyCodes[gamer1._counter]) {
      if (stopValue > FAST_TIME) {
        gamer1._answers[gamer1._counter] = Velocities.FAST_MODE;
      } else if (stopValue < SLOW_TIME) {
        gamer1._answers[gamer1._counter] = Velocities.SLOW_MODE;
      } else if ((stopValue >= SLOW_TIME) && (stopValue <= FAST_TIME)) {
        gamer1._answers[gamer1._counter] = Velocities.NORMAL_MODE;
      } else {
        gamer1._answers[gamer1._counter] = Velocities.WRONG_MODE;
      }
    } else {
      gamer1._answers[gamer1._counter] = Velocities.WRONG_MODE;
      if (gamer1._lives >= 0) {
        --gamer1._lives;
      }
    }

    gamer1._counter++;
  }

  create() {
    this.view.getBackClick = () => {
      this.data.goBack();
    };

    this.timing.startTimer();

    switch (this.gameName) {
      case Screens.GAME_1:
        this.view.getClick = () => {
          const questions2 = this.view._element.querySelectorAll(`input[name="question2"]`);
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {

            let stopValue = this.timing.time;
            this.timing.stopTimer();

            this.checkAnswer([...questions1, ...questions2].map((it) => it.checked ? 1 : 0).join(``), stopValue);

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_2:
        this.view.getClick = () => {
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if ((questions1[0].checked) || (questions1[1].checked)) {

            let stopValue = this.timing.time;
            this.timing.stopTimer();

            this.checkAnswer([...questions1].map((it) => it.checked ? 1 : 0).join(``), stopValue);

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_3:
        this.view.getClick = () => {
          const options = this.view._element.querySelectorAll(`.game__option`);

          options.forEach((it) => {
            it.addEventListener(`click`, () => {

              let stopValue = this.timing.time;
              this.timing.stopTimer();

              this.checkAnswer([...options].map((item) => (it === item) ? 1 : 0).join(``), stopValue);

              this.data.showNextScreen();
            });
          });
        };
        break;
    }

    return this.view.element;
  }
}
