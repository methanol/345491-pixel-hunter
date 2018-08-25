import InitialGameView from './initial-game-view.js';

export default class SplashScreen extends InitialGameView {
  constructor() {
    super();
    this.symbolsSeq = `Загрузка игры...`;
  }

  get template() {
    return `<div><h1>${this.symbolsSeq}</h1></div>`;
  }
}
