import common from '@/model/store/module/common';
import stepForm from '@/model/store/module/step-form';

export function getStoreConfig() {
  return {
    modules: {
      common,
      stepForm,
    },
  };
}

export default {};
