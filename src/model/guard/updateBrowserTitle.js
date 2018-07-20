import { get, isEmpty } from '@/model/util';

export default function ({ to }) {
  const title = isEmpty(get(to, 'meta.title'))
    ? process.env.VUE_APP_TITLE : get(to, 'meta.title');
  document.title = title;
  return null;
}
