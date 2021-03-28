<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu ref="tabMenu" :categories="categories" @selectItem="selectItem" />
      <scroll ref="scroll" class="scroll">
        <tab-content-category :subcategories="subcategories" @refreshTabContent="refreshTabContent" />
        <tab-control :titles="['综合', '新品', '销量']" @tabClick="tabClick" />
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'

import TabMenu from './childComps/TabMenu'
import TabContentCategory from './childComps/TabContentCategory'

import { getGoodsCategory } from './mock/category'

export default {
  name: 'Category',
  components: {
    NavBar,
    TabMenu,
    Scroll,
    TabContentCategory,
    TabControl
  },
  created() {
    this.getGoodsCategory()
  },
  data() {
    return {
      categories: [],
      currentIndex: 0
    } 
  },
  computed: {
    subcategories() {
      return this.categories[this.currentIndex]?.subcategories || []
    }
  },
  methods: {
    // 获取商品分类
    async getGoodsCategory() {
      this.categories = await getGoodsCategory()
      this.$nextTick(() => {
        this.$refs.tabMenu.refresh()
      })
    },
    // 选择大类
    selectItem(index) {
      this.currentIndex = index
    },
    // 刷新TabContentCategory的better-scroll
    refreshTabContent() {
      this.$refs.scroll.scrollTo(0, 0, 0)
      this.$refs.scroll.refresh()
    },
    // 点击tab-control
    tabClick(index) {
      console.log(index)
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
    display: flex;
    overflow: hidden;
    .scroll {
      flex: 1;
    }
  }
}
</style>
