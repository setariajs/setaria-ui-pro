<template>
  <div class="main">
    <el-row type="flex" justify="center" align="middle" class="text-container">
      <p class="title">{{ msg }}</p>
    </el-row>
    <el-row type="flex" justify="space-around" class="control">
      <el-col :span="8" class="back-button">
        <el-button type="primary" size="large" @click="back">返回首页</el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Setaria from 'setaria';

export default {
  computed: {
    msg() {
      return new Setaria.Message('MAM006E').toString();
    },
  },
  methods: {
    back() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>
<style scoped>
  .main {
    height: 100%;
  }
  .text-container {
    height: 60%;
  }
  .control {
    height: 40%;
  }
  .title {
    font-size: 2em;
  }
  .back-button {
    width: 100%;
    text-align: center;
  }
  .back-button button {
    width: 200px;
  }
</style>
