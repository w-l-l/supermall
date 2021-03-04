<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <div class="content">
      <home-swiper :banners="banners" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control class="tab-control" :titles="titles" />
    </div>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComponents/HomeSwiper'
import RecommendView from './childComponents/RecommendView'
import FeatureView from './childComponents/FeatureView'

import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  created() {
    this.getHomeMultidata()
  },
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ['流行', '新款', '精选']
    }
  },
  methods: {
    // 请求轮播，推荐数据
    async getHomeMultidata() {
      const res = await getHomeMultidata()
      const { banner, recommend } = res.data || []
      this.banners = banner.list || []
      this.recommends = recommend.list || []
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
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow-y: auto;
    .tab-control {
      position: sticky;
      top: 0;
      z-index: 9;
    }
  }
}
</style>
