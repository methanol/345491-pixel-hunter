import GameOneView from '.././view/game-view.js';
import {model} from '.././data.js';
import {Screens} from '.././permanent.js';
import {Velocities, Times} from '.././permanent.js';
import Timer from '.././create-timer.js';
import {gameData} from '.././controller.js';

export default class GamePresenter {
  constructor(data) {
    this.data = data;
    this.view = new GameOneView(gameData[model.counter].type);
    this.timing = new Timer(Times.START_TIME, (time) => this.view.updateTimer(time), () => this.goNext());
  }

  checkAnswer(answerCode, stopValue) {
    const {answers, counter, keyCodes} = model;

    if (answerCode === keyCodes[counter]) {
      if (stopValue > Times.FAST_TIME) {
        answers[counter] = Velocities.FAST_MODE;
        model.fastCounter++;
      } else if ((stopValue < Times.SLOW_TIME) && (stopValue > 0)) {
        answers[counter] = Velocities.SLOW_MODE;
        model.slowCounter++;
      } else if ((stopValue >= Times.SLOW_TIME) && (stopValue <= Times.FAST_TIME)) {
        answers[counter] = Velocities.NORMAL_MODE;
      }
    } else {
      answers[counter] = Velocities.WRONG_MODE;
      if (model.lives >= 0) {
        --model.lives;
      }
    }

    model.counter++;
  }


  create() {
    this.view.getBackClick = () => {
      this.data.goBack();
    };

    const timeBox = this.view.element.querySelector(`.game__timer`);
    timeBox.classList.remove(`game__timer--blink`);

    this.timing.startTimer();

    switch (gameData[model.counter].type) {
      case Screens.GAME_1:
        this.view.getClick = () => {
          const questions2 = this.view._element.querySelectorAll(`input[name="question2"]`);
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {

            const stopValue = this.timing.time;
            this.timing.stopTimer();

            const code1 = (gameData[model.counter].answers[0].type === `painting`) ? `01` : `10`;
            const code2 = (gameData[model.counter].answers[1].type === `painting`) ? `01` : `10`;

            model.keyCodes[model.counter] = [code1, code2].join(``);

            this.checkAnswer([...questions1, ...questions2].map((it) => it.checked ? 1 : 0).join(``), stopValue);

            this.data.showNextScreen();
          }
        };
        break;

      case Screens.GAME_2:
        this.view.getClick = () => {
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if ((questions1[0].checked) || (questions1[1].checked)) {

            const stopValue = this.timing.time;
            this.timing.stopTimer();

            const code1 = (gameData[model.counter].answers[0].type === `painting`) ? `01` : `10`;

            model.keyCodes[model.counter] = code1;

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

              const stopValue = this.timing.time;
              this.timing.stopTimer();

              const type = gameData[model.counter].question === `Найдите рисунок среди изображений` ? `painting` : `photo`;

              model.keyCodes[model.counter] = gameData[model.counter].answers.map((answer) => answer.type === type ? `1` : `0`).join(``);

              this.checkAnswer([...options].map((item) => (it === item) ? 1 : 0).join(``), stopValue);

              this.data.showNextScreen();
            });
          });
        };
        break;
    }

    return this.view.element;
  }

  goNext() {
    model.answers[model.counter] = Velocities.WRONG_MODE;
    model.counter++;

    if (model.lives >= 0) {
      --model.lives;
    }
    this.timing.stopTimer();
    this.data.showNextScreen();
  }
}
