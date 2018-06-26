import InitialGameView from '.././initial-game-view.js';
import {model, statistics} from '.././data.js';
import getScore from '.././get-score.js';
import FooterView from '.././view/footer-view.js';
import HeaderView from '.././view/header-view.js';
import {Velocities} from '.././permanent.js';

const LIFE_PRICE = 50;
const FAIL = `FAIL`;

export default class StatView extends InitialGameView {
  get template() {
    model.switchHeaderSmall();
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
          <td class="result__total">${(model.counter < 10) ? FAIL : model.answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(model.lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${model.answers.filter((it) => it === Velocities.FAST_MODE).length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${model.answers.filter((it) => it === Velocities.FAST_MODE).length * 50}</td>
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
          <td class="result__extra">${model.answers.filter((it) => it === Velocities.SLOW_MODE).length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${model.answers.filter((it) => it === Velocities.SLOW_MODE).length * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(model)}</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">2.</td>
          <td colspan="2">
            <ul class="stats">
            ${statistics[0].answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${(statistics[0].counter < 10) ? FAIL : statistics[0].answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(statistics[0].lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${statistics[0].answers.filter((it) => it === Velocities.FAST_MODE).length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[0].answers.filter((it) => it === Velocities.FAST_MODE).length * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${statistics[0].lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[0].lives * LIFE_PRICE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${statistics[0].answers.filter((it) => it === Velocities.SLOW_MODE).length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[0].answers.filter((it) => it === Velocities.SLOW_MODE).length * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(statistics[0])}</td>
        </tr>
      </table>
      <table class="result__table">
        <tr>
          <td class="result__number">3.</td>
          <td colspan="2">
            <ul class="stats">
            ${statistics[1].answers.map((it) =>
    `<li class="stats__result stats__result--${it}"></li>`).join(``)}
            </ul>
          </td>
          <td class="result__points">×&nbsp;100</td>
          <td class="result__total">${(statistics[1].counter < 10) ? FAIL : statistics[1].answers.filter((it) => it !== Velocities.WRONG_MODE).length * 100}</td>
        </tr>
        ${(statistics[1].lives >= 0) ? `<tr>
          <td></td>
          <td class="result__extra">Бонус за скорость:</td>
          <td class="result__extra">${statistics[1].answers.filter((it) => it === Velocities.FAST_MODE).length}&nbsp;<span class="stats__result stats__result--fast"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[1].answers.filter((it) => it === Velocities.FAST_MODE).length * 50}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Бонус за жизни:</td>
          <td class="result__extra">${statistics[1].lives}&nbsp;<span class="stats__result stats__result--alive"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[1].lives * LIFE_PRICE}</td>
        </tr>
        <tr>
          <td></td>
          <td class="result__extra">Штраф за медлительность:</td>
          <td class="result__extra">${statistics[1].answers.filter((it) => it === Velocities.SLOW_MODE).length}&nbsp;<span class="stats__result stats__result--slow"></span></td>
          <td class="result__points">×&nbsp;50</td>
          <td class="result__total">${statistics[1].answers.filter((it) => it === Velocities.SLOW_MODE).length * (-50)}</td>
        </tr>` : ``}
        <tr>
          <td colspan="5" class="result__total  result__total--final">${getScore(statistics[1])}</td>
        </tr>
      </table>
    </div>
    ${new FooterView().template}`;
  }

  bind() {
    const btnBack = this._element.querySelector(`button.back`);

    btnBack.addEventListener(`click`, () => {
      this.getBackClick();
    });
  }
}
