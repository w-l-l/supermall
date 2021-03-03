<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"/>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import HomeSwiper from './childComponents/HomeSwiper'
import { getHomeMultidata } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper
  },
  created() {
    this.getHomeMultidata()
  },
  data() {
    return {
      banners: [],
      recommends: []
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
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
}
</style>
