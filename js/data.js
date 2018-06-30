class GameModel {
  constructor() {
    this.lives = 3;
    this.userName = ``;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
    this.keyCodes = [];
    this.isGameScreen = false;
    this.counter = 0;
    this.fastCounter = 0;
    this.slowCounter = 0;
    this.photoCounter = 0;
    this.questions = [`Угадайте для каждого изображения фото или рисунок?`, `Угадай, фото или рисунок?`, `Найдите рисунок среди изображений`, `Найдите фото среди изображений`];
  }

  switchHeaderBig() {
    this.isGameScreen = true;
  }

  switchHeaderSmall() {
    this.isGameScreen = false;
  }

  resetState() {
    if (this.answers.filter((it) => it === `unknown`).length < 10) {
      statistics.unshift(new GameStatistic(model.answers, model.userName, model.lives, model.counter, model.fastCounter, model.slowCounter));
    }
    this.lives = 3;
    this.counter = 0;
    this.fastCounter = 0;
    this.slowCounter = 0;
    this.photoCounter = 0;
    this.isGameScreen = false;
    this.answers = [`unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`, `unknown`];
  }
}

const model = new GameModel();

const statistics = [];
const NO_LIVES = -1;
const NO_COUNTER = 5;

class GameStatistic {
  constructor(answers, userName = ``, lives = NO_LIVES, counter = NO_COUNTER, fastCounter = NO_COUNTER, slowCounter = NO_COUNTER) {
    this.answers = answers;
    this.userName = userName;
    this.lives = lives;
    this.counter = counter;
    this.fastCounter = fastCounter;
    this.slowCounter = slowCounter;
  }
}

statistics.unshift(new GameStatistic(model.answers));
statistics.unshift(new GameStatistic(model.answers));


const PHOTOS = [`https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`, `http://i.imgur.com/1KegWPz.jpg`, `https://k32.kn3.net/5C7060EC5.jpg`, `https://i.imgur.com/DiHM5Zb.jpg`, `http://i.imgur.com/DKR1HtB.jpg`, `https://k42.kn3.net/CF42609C8.jpg`, `https://k42.kn3.net/D2F0370D6.jpg`];

export {PHOTOS, model, statistics};
