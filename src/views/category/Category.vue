<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu ref="tabMenu" :categories="categories" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import TabMenu from './childComps/TabMenu'

import { getGoodsCategory } from './mock/category'

export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu
  },
  created() {
    this.getGoodsCategory()
  },
  data() {
    return {
      categories: []
    }
  },
  methods: {
    // 获取商品分类
    async getGoodsCategory() {
      this.categories = await getGoodsCategory()
      this.$nextTick(this.$refs.tabMenu.refresh)
    }
  }
}
</script>

<style lang="less" scoped>
#category {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #fff;
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: bold;
    color: #fff;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }
}
</style>
