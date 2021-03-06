import GameView from '../view/game-view.js';
import {model} from '../data.js';
import {Screens, Velocities, Times} from '../permanent.js';
import Timer from '../create-timer.js';
import {selectSlide} from '../util.js';
import HeaderPresenter from './header-presenter.js';

export default class GamePresenter {
  constructor(data, inputStates) {
    this.inputStates = inputStates;
    this.data = data;
    this.view = new GameView(this.inputStates, model);
    model.switchHeaderBig();
    this.headView = new HeaderPresenter(this.data);
    this.timing = new Timer(Times.START_TIME, (time) => this.headView.view.updateTimer(time), () => this.goNext());
  }

  checkAnswer(answerCode, stopValue) {
    const {answers, counter, keyCodes} = model;

    if (answerCode === keyCodes[counter]) {
      if (stopValue > Times.FAST_TIME) {
        answers[counter] = Velocities.FAST_MODE;
      } else if ((stopValue < Times.SLOW_TIME) && (stopValue > 0)) {
        answers[counter] = Velocities.SLOW_MODE;
      } else if ((stopValue >= Times.SLOW_TIME) && (stopValue <= Times.FAST_TIME)) {
        answers[counter] = Velocities.NORMAL_MODE;
      }
    } else {
      answers[counter] = Velocities.WRONG_MODE;
      model.takeLive();
    }

    model.counter++;
  }


  create() {
    const timeBox = this.headView.view.element.querySelector(`.game__timer`);
    timeBox.classList.remove(`game__timer--blink`);

    this.timing.startTimer();

    switch (this.inputStates[model.counter].type) {
      case Screens.GAME_1:
        this.view.getClick = () => {
          const questions2 = this.view._element.querySelectorAll(`input[name="question2"]`);
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if (((questions1[0].checked) || (questions1[1].checked)) && ((questions2[0].checked) || (questions2[1].checked))) {

            const stopValue = this.timing.time;
            this.timing.stopTimer();

            const code1 = (this.inputStates[model.counter].answers[0].type === `painting`) ? `01` : `10`;
            const code2 = (this.inputStates[model.counter].answers[1].type === `painting`) ? `01` : `10`;

            model.keyCodes[model.counter] = [code1, code2].join(``);

            this.checkAnswer([...questions1, ...questions2].map((it) => it.checked ? 1 : 0).join(``), stopValue);

            if ((model.lives >= 0) && (model.counter < 10)) {
              this.data.showNextScreen();
            } else {
              model.switchHeaderSmall();
              this.data.showStatScreen();
            }
          }
        };
        break;

      case Screens.GAME_2:
        this.view.getClick = () => {
          const questions1 = this.view._element.querySelectorAll(`input[name="question1"]`);

          if ((questions1[0].checked) || (questions1[1].checked)) {

            const stopValue = this.timing.time;
            this.timing.stopTimer();

            const code1 = (this.inputStates[model.counter].answers[0].type === `painting`) ? `01` : `10`;

            model.keyCodes[model.counter] = code1;

            this.checkAnswer([...questions1].map((it) => it.checked ? 1 : 0).join(``), stopValue);

            if ((model.lives >= 0) && (model.counter < 10)) {
              this.data.showNextScreen();
            } else {
              model.switchHeaderSmall();
              this.data.showStatScreen();
            }
          }
        };
        break;

      case Screens.GAME_3:
        this.view.getClick = () => {
          const options = this.view._element.querySelectorAll(`.game__option`);

          const stopValue = this.timing.time;
          this.timing.stopTimer();

          const type = this.inputStates[model.counter].question === `Найдите рисунок среди изображений` ? `painting` : `photo`;

          model.keyCodes[model.counter] = this.inputStates[model.counter].answers.map((answer) => answer.type === type ? `1` : `0`).join(``);

          this.checkAnswer([...options].map((it) => (it.classList.contains(`game__option--selected`)) ? 1 : 0).join(``), stopValue);

          if ((model.lives >= 0) && (model.counter < 10)) {
            this.data.showNextScreen();
          } else {
            model.switchHeaderSmall();
            this.data.showStatScreen();
          }
        };
        break;
    }

    return selectSlide([this.headView.create(), this.view.element]);
  }

  goNext() {
    model.answers[model.counter] = Velocities.WRONG_MODE;
    model.counter++;

    model.takeLive();

    this.timing.stopTimer();

    if ((model.lives >= 0) && (model.counter < 10)) {
      this.data.showNextScreen();
    } else {
      model.switchHeaderSmall();
      this.data.showStatScreen();
    }
  }
}
