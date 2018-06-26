class GameModel {
  constructor() {
    this.lives = 3;
    this.userName = ``;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    this.keyCodes = [`0101`, `10`, `100`, `0101`, `10`, `100`, `0101`, `10`, `100`, `0101`];
    this.isGameScreen = false;
    this.counter = 0;
    this.photoCounter = 0;
  }

  switchHeaderBig() {
    this.isGameScreen = true;
  }

  switchHeaderSmall() {
    this.isGameScreen = false;
  }

  resetState() {
    this._lives = 3;
    this._counter = 0;
    this._photoCounter = 0;
    this._isGameScreen = false;
    this._answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
  }
}

const model1 = new GameModel();


const PHOTOS = [`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`];

export {PHOTOS, model1};
