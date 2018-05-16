<template>
  <div>
    <el-row type="flex" justify="space-between">
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
          <span slot="title">总销售额</span>
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
    <el-card class="analysis_sales" :tab-list="salesTabList" :active-tab-name.sync="salesActiveTabName">
      <el-row type="flex" v-if="salesActiveTabName === 'sales'">
        <el-col :xl="16" :lg="16" :md="12" :sm="24" :xs="24">
          <el-bar title="销售额趋势" :data="barData" :height="300"></el-bar>
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
          <div class="sales-rank">
            <h4>门店销售额排名</h4>
            <ul class="sales-raning-list">
              <li v-for="(item, index) in salesRankData" :key="index">
                <span :class="index < 3 ? 'active' : ''">{{index}}</span>
                <span>{{item.title}}</span>
                <span>{{item.total}}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" v-else>
        <el-col :xl="16" :lg="16" :md="12" :sm="24" :xs="24">
          <el-bar title="访问量趋势" :data="barData" :height="300"></el-bar>
        </el-col>
        <el-col :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
          <div class="sales-rank">
            <h4>门店访问量排名</h4>
            <ul class="sales-raning-list">
              <li v-for="(item, index) in salesRankData" :key="index">
                <span :class="index < 3 ? 'active' : ''">{{index}}</span>
                <span>{{item.title}}</span>
                <span>{{item.total}}</span>
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<style lang="scss">
  .analysis_sales .el-card__header.is-tab {
    padding-top: 12px;
  }
</style>
<style lang="scss" scoped>
  .analysis_sales {
    margin-top: 16px;

    .sales-rank {
      padding: 0 32px 32px 72px;

      .sales-raning-list {
        margin: 25px 0 0;
        padding: 0;
        list-style: none;

        li {
          zoom: 1;
          margin-top: 16px;

          span {
            color: rgba(0,0,0,.65);
            font-size: 14px;
            line-height: 22px;

            &:first-child {
              background-color: #f5f5f5;
              border-radius: 20px;
              display: inline-block;
              font-size: 12px;
              font-weight: 600;
              margin-right: 24px;
              height: 20px;
              line-height: 20px;
              width: 20px;
              text-align: center;

              &.active {
                background-color: #314659;
                color: #fff;
              }
            }

            &:last-child {
              float: right;
            }
          }
        }
      }
    }
  }
</style>

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
    const barData = [];
    for (let i = 0; i < 12; i += 1) {
      barData.push({
        x: `${i + 1}月`,
        y: Math.floor(Math.random() * 1000) + 200,
      });
    }
    const salesRankData = [];
    for (let i = 0; i < 7; i += 1) {
      salesRankData.push({
        title: `工专路 ${i} 号店`,
        total: 323234,
      });
    }
    return {
      miniAreaTotal: numeral(12321).format('0,0'),
      miniAreaFooter: numeral(0.76).format('0%'),
      miniBarTotal: numeral(8846).format('0,0'),
      miniBarFooter: numeral(1234).format('0,0'),
      miniBarData: miniData,
      miniAreaData: miniData,
      barData,
      textTotal: `¥ ${numeral(129102).format('0,0')}`,
      salesTabList: [
        {
          label: '销售额',
          name: 'sales',
        },
        {
          label: '访问量',
          name: 'views',
        },
      ],
      salesActiveTabName: 'sales',
      salesRankData,
    };
  },
  created() {
  },
  components: {
  },
};
</script>

