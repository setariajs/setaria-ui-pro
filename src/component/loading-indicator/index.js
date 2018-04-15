import { config, util } from 'setaria';
import { Loading } from 'setaria-ui';

let instance = null;

export default class {
  static show() {
    if (util.isEmpty(instance)) {
      instance = Loading.service({
        fullscreen: true,
        text: config.env.LOADING_TEXT,
      });
    }
  }

  static hide() {
    if (!util.isEmpty(instance)) {
      instance.close();
      instance = null;
    }
  }
}
