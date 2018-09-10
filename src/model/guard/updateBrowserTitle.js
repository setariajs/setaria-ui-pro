import { get, isEmpty } from '@/model/util';

export default function (to, from, next) {
  const title = isEmpty(get(to, 'meta.title'))
    ? process.env.VUE_APP_TITLE : get(to, 'meta.title');
  document.title = `${title} - Setaria UI Pro`;
  next();
}
