<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu ref="tabMenu" :categories="categories" @selectItem="selectItem" />
      <div class="tab-content">
        <tab-control class="tab-control1" ref="tabControl1" :titles="['综合', '新品', '销量']" @tabClick="tabClick" v-show="isFixed" />
        <scroll ref="scroll" class="scroll" :probe-type="3" @scroll="contentScroll">
          <tab-content-category :subcategories="subcategories" @refreshTabContent="refreshTabContent" />
          <tab-control ref="tabControl2" :titles="['综合', '新品', '销量']" @tabClick="tabClick" />
          <goods-list :goods="categoryGoods"></goods-list>
        </scroll>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

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
    TabControl,
    GoodsList
  },
  created() {
    this.getGoodsCategory()
  },
  data() {
    return {
      categories: [],
      currentIndex: 0,
      currentType: 'pop',
      isFixed: false
    } 
  },
  computed: {
    subcategories() {
      return this.categories[this.currentIndex]?.subcategories || []
    },
    categoryGoods() {
      return this.categories[this.currentIndex]?.categoryDetail[this.currentType]
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
      this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = 0
      this.tabClick(0)
    },
    // 刷新TabContentCategory的better-scroll
    refreshTabContent() {
      this.$refs.scroll.scrollTo(0, 0, 0)
      this.$refs.scroll.refresh()
    },
    // 点击tab-control
    tabClick(index) {
      this.$refs.tabControl1.currentIndex = this.$refs.tabControl2.currentIndex = index
      this.currentType = ['pop', 'new', 'sell'][index]
    },
    // 滚动监听
    contentScroll({ y }) {
      y = -y
      this.isFixed = y >= this.$refs.tabControl2.$el.offsetTop
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
    .tab-content {
      position: relative;
      flex: 1;
      .tab-control1 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 9;
      }
      .scroll{
        overflow: hidden;
        height: 100%;
      }
    }
  }
}
</style>
