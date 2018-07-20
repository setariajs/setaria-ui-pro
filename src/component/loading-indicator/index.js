import { Loading } from 'setaria-ui';
import { isEmpty } from '@/model/util';

let instance = null;

export default class {
  static show() {
    if (isEmpty(instance)) {
      instance = Loading.service({
        fullscreen: true,
        text: process.env.VUE_APP_SERVICE_LOADING_TEXT,
      });
    }
  }

  static hide() {
    if (!isEmpty(instance)) {
      instance.close();
      instance = null;
    }
  }
}
