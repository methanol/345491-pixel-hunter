import {Velocities} from './permanent.js';

const startState = Object.freeze({
  lives: 3,
  time: 30,
  userName: ``,
  answers: [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`],
  keyCodes: [`0101`, `10`, `100`, `0101`, `10`, `100`, `0101`, `10`, `100`, `0101`],
  isGameScreen: false,
  counter: 0,
  photoCounter: 0
});

const workState = Object.assign({}, startState);

class GameModel {
  constructor() {
    this._lives = 3;
    this._time = 30;
    this._userName = ``;
    this._answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    this._keyCodes = [`0101`, `10`, `100`, `0101`, `10`, `100`, `0101`, `10`, `100`, `0101`];
    this._isGameScreen = false;
    this._counter = 0;
    this._photoCounter = 0;
  }

  switchHeaderBig() {
    this._isGameScreen = true;
  }

  switchHeaderSmall() {
    this._isGameScreen = false;
  }

  checkAnswer(answerCode) {
    if (answerCode === this._keyCodes[this._counter]) {
      this._answers[this._counter] = Velocities.NORMAL_MODE;
    } else {
      this._answers[this._counter] = Velocities.WRONG_MODE;
      if (this._lives >= 0) {
        --this._lives;
      }
    }

    this._counter++;
  }

  resetState() {
    this._lives = 3;
    this._counter = 0;
    this._photoCounter = 0;
    this._isGameScreen = false;
    this._answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
  }
}

let gamer1 = new GameModel();


const photos = [`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`];

export {workState, photos, gamer1};
