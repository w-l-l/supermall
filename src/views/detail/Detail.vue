<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :top-imgs="imgs"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNabBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'

import Scroll from 'components/common/scroll/Scroll'

// import { getDetail } from 'network/detail'
import { mockDetail } from './mock/detail';

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo
  },
  created() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  data() {
    return {
      id: 0,
      imgs: [],
      goods: {},
      shop: {},
      detailInfo: {}
    }
  },
  methods: {
    // 获取详情数据
    async getDetail() {
      // const res = await getDetail(this.id)
      const res = await mockDetail()
      this.imgs = res.imgs
      this.goods = res.goods
      this.shop = res.shop
      this.detailInfo = res.detailInfo
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }
}
</style>
