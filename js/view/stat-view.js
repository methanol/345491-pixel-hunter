import InitialGameView from '../initial-game-view.js';
import {model} from '../data.js';
import getScore from '../get-score.js';
import FooterView from '../view/footer-view.js';
import HeaderView from '../view/header-view.js';
import {Velocities} from '../permanent.js';
import {serverStatistics} from '../controller.js';

const LIFE_PRICE = 50;
const FAIL = `FAIL`;

export default class StatView extends InitialGameView {


  get template() {
    model.switchHeaderSmall();
    const prevGame1 = (serverStatistics.length > 1) ? serverStatistics[serverStatistics.length - 1][0] : ``;
    const prevGame2 = (serverStatistics.length > 2) ? serverStatistics[serverStatistics.length - 1][1] : ``;

    return `${new HeaderView().template}
    <div class="result">
      <h1>${(model.lives >= 0) ? `Победа!` : `Поражение!`}</h1>
      <table class="result__table">
        <tr>
          <td class="result__number">1.</td>
          <td colspan="2">
            <ul class="stats">
            ${model.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${(model.lives < 0) ? FAIL : model.answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(model.lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${model.fastCounter}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${model.fastCounter * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${model.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${model.lives * LIFE_PRICE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${model.slowCounter}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${model.slowCounter * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(model)}</td>
        </tr>
      </table>
      ${((serverStatistics.length < 1) || (prevGame1 === ``)) ? `` : `<table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td colspan="2">
            <ul class="stats">
            ${prevGame1.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${(prevGame1.counter < 10) ? FAIL : prevGame1.answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(prevGame1.lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${prevGame1.fastCounter}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame1.fastCounter * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${prevGame1.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame1.lives * LIFE_PRICE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${prevGame1.slowCounter}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame1.slowCounter * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(prevGame1)}</td>
        </tr>
      </table>`}
      ${((serverStatistics.length < 2) ||
        (prevGame2 === ``)) ? `` : `<table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
            ${prevGame2.answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${(prevGame2.counter < 10) ? FAIL : prevGame2.answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(prevGame2.lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${prevGame2.fastCounter}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame2.fastCounter * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${prevGame2.lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame2.lives * LIFE_PRICE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${prevGame2.slowCounter}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${prevGame2.slowCounter * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(prevGame2)}</td>
        </tr>
      </table>
    </div>`}
    ${new FooterView().template}`;
  }

  bind() {
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });
  }
}
