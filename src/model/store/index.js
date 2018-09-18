import common from '@/model/store/module/common';
import form from '@/model/store/module/form';

export function getStoreConfig() {
  return {
    modules: {
      common,
      form,
    },
  };
}

export default {};
