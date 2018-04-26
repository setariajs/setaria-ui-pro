<template>
  <el-row type="flex" justify="space-around">
    <el-col :span="6">
      <el-chart-card :total="miniBarTotal">
        <span slot="title">访问量</span>
        <span slot="action">
          <el-tooltip content="指标说明" placement="top" slot="title">
            <i class="el-icon-info"></i>
          </el-tooltip>
        </span>
        <el-mini-bar :height="30" :data="miniBarData"></el-mini-bar>
        <div slot="footer">
          日访问量 {{ miniBarFooter }}
        </div>
      </el-chart-card>
    </el-col>
    <el-col :span="6">
      <el-chart-card :total="miniAreaTotal">
        <span slot="title">搜索用户数量</span>
        <el-mini-area :height="30" :border-width="2" :data="miniAreaData"></el-mini-area>
        <div slot="footer">
          转化率 {{ miniAreaFooter }}
        </div>
      </el-chart-card>
    </el-col>
    <el-col :span="6">
      <el-chart-card :total="textTotal" :content-height="30">
        <span slot="avatar">
          <img
            :style="{
              width: '56px',
              height: '56px',
            }"
            src="http://bpic.588ku.com/element_origin_min_pic/01/40/32/98573cf75c3bf04.jpg"
            alt="indicator"
          />
        </span>
        <span slot="title">移动指标</span>
        <span>
          周同比
          <el-trend flag="up">12%</el-trend>
        </span>
        <span style="margin-left: 16px;">
          日环比
          <el-trend flag="down">10%</el-trend>
        </span>
        <div slot="footer">
          日均销售额 {{ miniAreaFooter }}
        </div>
      </el-chart-card>
    </el-col>
  </el-row>
</template>
<script>
import numeral from 'numeral';
import { util } from 'setaria';

export default {
  data() {
    const miniData = [];
    const beginDate = new Date();
    for (let i = 0; i < 20; i += 1) {
      miniData.push({
        x: util.formatDate(util.addDateTime(beginDate, i, 'days'), 'YYYY-MM-DD'),
        y: Math.floor(Math.random() * 100) + 10,
      });
    }
    return {
      miniAreaTotal: numeral(12321).format('0,0'),
      miniAreaFooter: numeral(0.76).format('0%'),
      miniBarTotal: numeral(8846).format('0,0'),
      miniBarFooter: numeral(1234).format('0,0'),
      miniBarData: miniData,
      miniAreaData: miniData,
      textTotal: `¥ ${numeral(129102).format('0,0')}`,
    };
  },
  created() {
  },
  components: {
  },
};
</script>

