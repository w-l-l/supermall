<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table, index) in paramInfo.sizes" :key="index">
      <tr v-for="(tr, index) in table" :key="index">
        <td v-for="(td, index) in tr" :key="index">{{ td }}</td>
      </tr>
    </table>
    <table class="info-param">
      <tr v-for="(item, index) in paramInfo.infos" :key="index">
        <td class="info-param-key">{{ item.key }}</td>
        <td class="info-param-value">{{ item.value }}</td>
      </tr>
    </table>
    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.param-info {
  padding: 20px 15px;
  font-size: 14px;
  border-bottom: 5px solid #f2f5f8;
  table {
    width: 100%;
    border-collapse: collapse;
    tr {
      height: 42px;
      td {
        border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      }
    }
    &.info-param {
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      .info-param-key {
        width: 95px;
      }
      .info-param-value {
        color: #eb4868;
      }
    }
  }
  .info-img img {
    width: 100%;
  }
}
</style>
