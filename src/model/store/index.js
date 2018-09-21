import common from '@/model/store/module/common';
import form from '@/model/store/module/form';
import profile from '@/model/store/module/profile';
import list from '@/model/store/module/list';

export function getStoreConfig() {
  return {
    modules: {
      common,
      form,
      profile,
      list,
    },
  };
}

export default {};
