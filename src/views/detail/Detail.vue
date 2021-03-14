<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :top-imgs="imgs" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info :param-info="paramInfo" />
      <detail-comment-info :comment-info="commentInfo" />
      <goods-list :goods="goodsList" />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNabBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'

import GoodsList from 'components/content/goods/GoodsList'
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
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList
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
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: []
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
      this.paramInfo = res.paramInfo
      this.commentInfo = res.commentInfo
      this.goodsList = res.goodsList
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
