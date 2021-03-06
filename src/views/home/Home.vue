<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll" pull-up-load @pullingUp="loadMore">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { mockGoodsList } from './mock/goods'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选'],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop',
      isShow: false
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  methods: {
    // 请求轮播，推荐数据
    async getHomeMultidata() {
      const res = await getHomeMultidata()
      const { banner, recommend } = res.data || []
      this.banners = banner.list || []
      this.recommends = recommend.list || []
    },
    // 请求商品数据
    async getHomeGoods(type) {
      const page = this.goods[type].page + 1
      // const res = await getHomeGoods(type, page)
      const res = await mockGoodsList(type, page)
      this.goods[type].list.push(...res.data.list)
      this.goods[type].page++
      this.$refs.scroll && this.$refs.scroll.refresh()
    },
    // tabControl切换
    tabClick(index) {
      this.currentType = ['pop', 'new', 'sell'][index]
    },
    // 页面滚动
    contentScroll(position) {
      this.isShow = -position.y > 1000
    },
    // 加载更多
    async loadMore() {
      await this.getHomeGoods(this.currentType)
      this.$refs.scroll.finishPullUp()
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  }
}
</script>

<style lang="less" scoped>
#home {
  position: relative;
  width: 100%;
  height: 100vh;
  .home-nav {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
    background-color: var(--color-tint);
    color: #fff;
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    .tab-control {
      position: sticky;
      top: 0;
      z-index: 9;
    }
  }
}
</style>
