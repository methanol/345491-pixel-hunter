import InitialGameView from '../initial-game-view.js';
import getScore from '../get-score.js';
import FooterView from '../view/footer-view.js';
import {Velocities} from '../permanent.js';
import {serverStatistics} from '../controller.js';

const LIFE_PRICE = 50;
const FAIL = `FAIL`;

export default class StatView extends InitialGameView {
  constructor(shadowModel) {
    super();
    this.model = shadowModel;
    this.lives = shadowModel.lives;
    this.answers = shadowModel.answers;
  }

  makeTemplate(stat) {
    return `<table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          <ul class="stats">
          ${stat.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
          </ul>
        </td>
        <td class="result__points">×&nbsp;100</td>
        <td class="result__total">${(stat.lives < 0) ? FAIL : stat.answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
      </tr>
      ${(stat.lives >= 0) ? `<tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">${stat.answers.filter((it) => it === Velocities.FAST_MODE).length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${stat.answers.filter((it) => it === Velocities.FAST_MODE).length * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${stat.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${stat.lives * LIFE_PRICE}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">${stat.answers.filter((it) => it === Velocities.SLOW_MODE).length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">×&nbsp;50</td>
        <td class="result__total">${stat.answers.filter((it) => it === Velocities.SLOW_MODE).length * (-50)}</td>
      </tr>` : ``}
      <tr>
        <td colspan="5" class="result__total  result__total--final">${getScore(stat)}</td>
      </tr>
    </table>`;
  }

  get template() {
    const prevGame1 = (serverStatistics.length > 1) ? serverStatistics[serverStatistics.length - 1][0] : void 1;
    const prevGame2 = (serverStatistics.length > 2) ? serverStatistics[serverStatistics.length - 1][1] : void 1;

    return `<div class="result">
      <h1>${(this.lives >= 0) ? `Победа!` : `Поражение!`}</h1>
      ${this.makeTemplate(this.model)}
      ${((serverStatistics.length < 1) || (prevGame1 === void 1)) ? `` : this.makeTemplate(prevGame1)}
      ${((serverStatistics.length < 1) || (prevGame2 === void 1)) ? `` : this.makeTemplate(prevGame2)}
      ${new FooterView().template}`;
  }

}
