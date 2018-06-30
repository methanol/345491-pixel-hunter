import InitialGameView from './initial-game-view.js';

export default class SplashScreen extends InitialGameView {
  constructor() {
    super();
    this.cursor = 0;
    this.symbolsSeq = `+x-`;
  }

  get template() {
    return `<div></div>`;
  }

  start() {
    this.cursor = ++this.cursor >= this.symbolsSeq.length ? 0 : this.cursor;
    this.element.textContent = this.symbolsSeq[this.cursor];
    this.timeout = setTimeout(() => this.start(), 50);
  }

  stop() {
    clearTimeout(this.timeout);
  }
}
