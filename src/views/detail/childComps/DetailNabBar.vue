<template>
  <nav-bar class="detail-nav-bar">
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <div class="title-item" v-for="(item, index) in titles" :key="index" :class="{ active: index === currentIndex }" @click="titleClick(index)">{{ item }}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    // 后退
    backClick() {
      this.$router.back()
    },
    // title点击
    titleClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style lang="less" scoped>
.detail-nav-bar {
  .back {
    height: 100%;
    img {
      margin-top: 12px;
    }
  }
  .title {
    display: flex;
    font-size: 13px;
    .title-item {
      flex: 1;
      &.active {
        color: var(--color-high-text);
      }
    }
  }
}
</style>
