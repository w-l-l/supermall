<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tab-control1" ref="tabControl1" :titles="titles" @tabClick="tabClick" v-show="isFixed" />
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll" pull-up-load @pullingUp="loadMore">
      <home-swiper ref="swiper" :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control2" ref="tabControl2" :titles="titles" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <back-top @click.native="_backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'

import { getHomeMultidata, getHomeGoods } from 'network/home'
import { mockGoodsList } from './mock/goods'

import { backTopMixin } from 'common/mixin'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll
  },
  mixins: [backTopMixin],
  created() {
    this.getHomeMultidata()
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  activated() {
    // 页面进入开启轮播
    this.$refs.swiper.startTimer()
    // 页面进入滚动到之前离开时的位置
    this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh()
  },
  deactivated() {
    // 页面离开停止轮播
    this.$refs.swiper.stopTimer()
    // 页面离开保存当前better-scroll滚动的距离
    this.saveY = this.$refs.scroll.getScrollY()
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
      isFixed: false,
      saveY: 0
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
      this.$refs.scroll && this.$refs.scroll.refresh()
    },
    // 页面滚动
    contentScroll(position) {
      this._contentScroll(position, 1000).then(position => {
        const y = -position.y
        this.isFixed = y >= this.$refs.tabControl2.$el.offsetTop
      })
    },
    // 加载更多
    async loadMore() {
      await this.getHomeGoods(this.currentType)
      this.$refs.scroll && this.$refs.scroll.finishPullUp()
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
  .tab-control1{
    position: relative;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .scroll {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
}
</style>
