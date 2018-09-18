<template>
  <div class="basic-profile">
    <el-page-header
      title="基础详情页">
    </el-page-header>
    <el-grid-content>
      <el-card shadow="never">
        <el-description-list title="退款申请" size="large">
          <el-description term="取货单号">1000000000</el-description>
          <el-description term="状态">已取货</el-description>
          <el-description term="销售单号">1234123421</el-description>
          <el-description term="子订单">3214321432</el-description>
        </el-description-list>
        <el-divider class="divider"/>
        <el-description-list title="用户信息" size="large">
          <el-description term="用户姓名">付小小</el-description>
          <el-description term="联系电话">18100000000</el-description>
          <el-description term="常用快递">菜鸟仓储</el-description>
          <el-description term="取货地址">浙江省杭州市西湖区万塘路18号</el-description>
          <el-description term="备注">无</el-description>
        </el-description-list>
        <el-divider class="divider"/>
        <div class="title">
          退货商品
        </div>
        <el-table
          class="good-data-list"
          :data="goodDataList"
          v-loading="loading"
          show-summary
          :summary-method="getSummaries">
          <el-table-column label="商品编号">
            <template slot-scope="scope">
              <el-button type="text" href="">{{ scope.row.id }}</el-button>
            </template>
          </el-table-column>
          <el-table-column label="商品名称" prop="name"/>
          <el-table-column label="商品条码" prop="barcode"/>
          <el-table-column label="单价" prop="price" align="right"/>
          <el-table-column label="数量（件）" prop="num" align="right"/>
          <el-table-column label="金额" prop="amount" align="right"/>
        </el-table>
        <div class="title">
          退货进度
        </div>
        <el-table
          :data="progressDataList"
          v-loading="loading">
          <el-table-column label="时间" prop="time"/>
          <el-table-column label="当前进度" prop="rate"/>
          <el-table-column label="状态">
            <template slot-scope="scope">
              <el-badge :status="scope.row.status" :text="getStatusText(scope.row.status)"/>
            </template>
          </el-table-column>
          <el-table-column label="操作员ID" prop="operator"/>
          <el-table-column label="耗时" prop="cost"/>
        </el-table>
      </el-card>
    </el-grid-content>
  </div>
</template>
<style lang="scss" scoped>
@import "@/style/variables.scss";

.basic-profile {
  .divider {
    margin-bottom: 32px;
  }

  .title {
    color: $--heading-color;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .good-data-list {
    margin-bottom: 24px;
  }
}
</style>
<script>
import { isNumber } from '@/model/util';

export default {
  name: 'BasicProfile',
  data() {
    return {
    };
  },
  computed: {
    goodDataList() {
      return this.$store.state.profile.basicGoodList;
    },
    progressDataList() {
      return this.$store.state.profile.basicProgressList;
    },
    loading() {
      return this.$store.state.loading.actions['profile/fetchBasic'];
    },
  },
  mounted() {
    this.$store.dispatch('profile/fetchBasic');
  },
  methods: {
    getSummaries(param) {
      const ret = [];
      const { columns, data } = param;
      columns.forEach((column, index) => {
        if (index === 0) {
          ret[index] = '总计';
        }
        if (column.property === 'num' || column.property === 'amount') {
          const values = data.map(item => parseFloat(item[column.property]));
          if (values.length > 0 && values.every(value => isNumber(value))) {
            ret[index] = values.reduce((accumulator, value) => accumulator + value);
          }
        }
      });
      return ret;
    },
    getStatusText(status) {
      let ret = '';
      switch (status) {
        case 'processing':
          ret = '进行中';
          break;
        case 'success':
          ret = '成功';
          break;
        default:
          ret = '';
      }
      return ret;
    },
  },
};
</script>
