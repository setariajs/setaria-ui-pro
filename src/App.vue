<template>
  <router-view></router-view>
</template>
<script>
import Setaria, { constants } from 'setaria';
import { Loading, Message } from 'setaria-ui';
import { get } from '@/model/util';

let loadingInstance;

export default {
  name: 'app',
  computed: {
    loadingState() {
      return get(this.$store, 'getters')[constants.STORE_KEY.GET_IS_LOADING];
    },
  },
  watch: {
    loadingState: {
      immediate: true,
      handler(val) {
        if (val) {
          loadingInstance = Loading.service({
            fullscreen: true,
            text: process.env.VUE_APP_SERVICE_LOADING_TEXT,
          });
        } else {
          this.$nextTick(() => {
            if (loadingInstance) {
              loadingInstance.close();
            }
          });
        }
      },
    },
  },
  created() {
    // 程序抛出的错误信息处理
    Setaria.config.errorHanlder = ({ noIdMessage }) => {
      Message.error({
        message: noIdMessage,
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
