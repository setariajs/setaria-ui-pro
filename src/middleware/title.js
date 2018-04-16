import { config, util } from 'setaria';

export default function ({ to }) {
  const title = util.isEmpty(util.get(to, 'meta.title'))
    ? config.env.APP_TITLE : util.get(to, 'meta.title');
  document.title = title;
  return null;
}
