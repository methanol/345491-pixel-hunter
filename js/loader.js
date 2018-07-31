import {checkStatus} from './controller.js';

const DEFAULT_NAME = `user`;
const APP_ID = 1491625;

const toJSON = (res) => res.json();

export default class Loader {

  static saveResults(data, name = DEFAULT_NAME) {
    data = Object.assign({name}, data);
    const requestSettings = {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': `application/json`
      },
      method: `POST`
    };
    return fetch(`https://es.dump.academy/pixel-hunter/stats/${APP_ID}-${name}`, requestSettings).then(checkStatus);
  }

  static loadResults(name = DEFAULT_NAME) {
    return fetch(`https://es.dump.academy/pixel-hunter/stats/${APP_ID}-${name}`).then(checkStatus).then(toJSON);
  }
}
