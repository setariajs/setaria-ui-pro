<template>
  <router-view></router-view>
</template>
<script>
import Setaria, { storeTypes, util } from 'setaria';
import { LoadingIndicator, Notice } from '@/component';

export default {
  name: 'app',
  computed: {
    loadingState() {
      return util.get(this.$store, 'getters')[storeTypes.GET_IS_LOADING];
    },
  },
  watch: {
    loadingState: {
      immediate: true,
      handler(val) {
        if (val) {
          LoadingIndicator.show();
        } else {
          LoadingIndicator.hide();
        }
      },
    },
  },
  created() {
    // 程序抛出的错误信息处理
    Setaria.config.errorHanlder = (err) => {
      Notice.showMessage({
        message: err.noIdMessage,
      });
    };
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
