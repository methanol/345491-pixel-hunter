import GameOneView from '.././view/game-one-view.js';
import {model1} from '.././data.js';
import {Screens} from '.././permanent.js';
import {Velocities, Times} from '.././permanent.js';
import CreateTimer from '.././create-timer.js';

export default class GamePresenter {
  constructor(data, name) {
    this.data = data;
    this.view = new GameOneView(name);
    this.gameName = name;
    this.timing = new CreateTimer(Times.START_TIME, (time) => this.view.updateTimer(time));
  }

  /* checkAnswer(answerCode, stopValue) {
    if (answerCode === model1.keyCodes[model1.counter]) {
      if (stopValue > Times.FAST_TIME) {
        model1.answers[model1.counter] = Velocities.FAST_MODE;
      } else if (stopValue < Times.SLOW_TIME) {
        model1.answers[model1.counter] = Velocities.SLOW_MODE;
      } else if ((stopValue >= Times.SLOW_TIME) && (stopValue <= Times.FAST_TIME)) {
        model1.answers[model1.counter] = Velocities.NORMAL_MODE;
      } else {
        model1.answers[model1.counter] = Velocities.WRONG_MODE;
      }
    } else {
      model1.answers[model1.counter] = Velocities.WRONG_MODE;
      if (model1.lives >= 0) {
        --model1.lives;
      }
    }

    model1.counter++;
  }*/

  checkAnswer(answerCode, stopValue) {
    const {answers, counter, keyCodes, lives} = model1;

    if (answerCode === keyCodes[counter]) {
      if (stopValue > Times.FAST_TIME) {
        answers[counter] = Velocities.FAST_MODE;
      } else if (stopValue < Times.SLOW_TIME) {
        answers[counter] = Velocities.SLOW_MODE;
      } else if ((stopValue >= Times.SLOW_TIME) && (stopValue <= Times.FAST_TIME)) {
        answers[counter] = Velocities.NORMAL_MODE;
      } else {
        answers[counter] = Velocities.WRONG_MODE;
      }
    } else {
      answers[counter] = Velocities.WRONG_MODE;
      if (model1.lives >= 0) {
        --model1.lives;
      }
    }

    model1.counter++;
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
