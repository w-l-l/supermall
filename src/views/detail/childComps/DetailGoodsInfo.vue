<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc clear-fix">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage.key }}</div>
    <div class="info-list">
      <img v-for="(item, index) in detailInfo.detailImage.list" :key="index" :src="item" alt="" @load="imgLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    // 图片加载
    imgLoad() {
      if(++this.count === this.detailInfo.detailImage.list.length) this.$emit('imgLoad')
    }
  }
}
</script>

<style lang="less" scoped>
.mixin() {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.icon() {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
  .info-desc {
    padding: 0 15px;
    .start {
      .mixin;
      float: left;
      &::before {
        .icon;
      }
    }
    .end {
      .mixin;
      float: right;
      &::after {
        .icon;
        right: 0;
      }
    }
    .desc {
      padding: 15px 0;
      font-size: 14px;
    }
  }
  .info-key {
    margin: 10px 0 10px 15px;
  }
  .info-list img {
    width: 100%;
  }
}
</style>
