<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="new-price">{{ goods.newPrice | format }}</span>
      <span class="old-price">{{ goods.oldPrice | format }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}折</span>
    </div>
    <div class="info-other">
      <span v-for="(item, index) in goods.columns" :key="index">{{ item }}</span>
    </div>
    <div class="info-service">
      <div class="info-service-item" v-for="(item, index) in goods.services" :key="index">
        <img :src="item.icon" alt="">
        <span>{{ item.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    format(val) {
      return '￥' + val.toFixed(2)
    }
  }
}
</script>

<style lang="less" scoped>
.base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
  .info-title {
    color: #222;
  }
  .info-price {
    margin-top: 10px;
    .new-price {
      font-size: 24px;
      color: var(--color-high-text);
    }
    .old-price {
      font-size: 13px;
      margin-left: 5px;
      text-decoration: line-through;
    }
    .discount {
      font-size: 12px;
      padding: 2px 5px;
      color: #fff;
      background-color: var(--color-high-text);
      border-radius: 8px;
      margin-left: 5px;
      position: relative;
      top: -8px;
    }
  }
  .info-other {
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    border-bottom: 1px solid rgba(100, 100, 100, 0.1);
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    .info-service-item {
      img {
        width: 14px;
        height: 14px;
        position: relative;
        top: 2px;
      }
      span {
        font-size: 13px;
        color: #333;
        padding-left: 3px;
      }
    }
  }
}
</style>
