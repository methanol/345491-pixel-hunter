import InitialGameView from './initial-game-view.js';

export default class ErrorScreen extends InitialGameView {

  constructor(error) {
    super();
    this.error = error;
  }

  get template() {
    return `
      <div class="end">
        <p>Произошла ошибка: ${this.error.message}</p>
      </div>`;
  }

}
