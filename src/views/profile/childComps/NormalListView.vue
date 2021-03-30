<template>
  <div class="normal-list">
    <div v-for="(item, index) in listData" :key="index" class="item">
      <span class="icon">
        <img :src="iconUrl(item.icon)" alt="">
      </span>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NormalListView',
  props: {
    listData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    iconUrl(icon) {
      return require('assets/img/profile/' + icon)
    }
  }
}
</script>

<style lang="less" scoped>
.normal-list {
  background-color: #fff;
  font-size: 15px;
  color: #333;
  margin-top: 15px;
  .item {
    position: relative;
    height: 44px;
    line-height: 44px;
    .icon {
      margin-top: 10px;
      position: absolute;
      left: 16px;
      top: -7px;
      img {
        width: 20px;
        height: 20px;
      }
    }
    .info {
      margin-left: 40px;
      border-bottom: 1px solid rgba(100, 100, 100, 0.1);
      padding-left: 5px;
    }
    &:last-of-type .info {
      border-bottom: none;
    }
  }
}
</style>
