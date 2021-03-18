<template>
  <div class="detail">
    <detail-nav-bar :currentIndex="currentIndex" @titleClick="titleClick" />
    <scroll class="scroll" ref="scroll" :probe-type="3" @scroll="contentScroll">
      <detail-swiper :top-imgs="imgs" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info ref="param" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="goodsList" />
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>
    <back-top @click.native="_backClick" v-show="isShowBackTop"></back-top>
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
import DetailBottomBar from './childComps/DetailBottomBar'

import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'

// import { getDetail } from 'network/detail'
import { mockDetail } from './mock/detail'

import { backTopMixin } from 'common/mixin'
import { mapActions } from 'vuex'

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
    GoodsList,
    DetailBottomBar
  },
  mixins: [backTopMixin],
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
      goodsList: [],
      detailTops: [],
      currentIndex: 0
    }
  },
  methods: {
    ...mapActions({
      addCart: 'addToCart'
    }),
    // 获取详情数据
    async getDetail() {
      // const res = await getDetail(this.id)
      const res = await mockDetail(this.id)
      this.imgs = res.imgs
      this.goods = res.goods
      this.shop = res.shop
      this.detailInfo = res.detailInfo
      this.paramInfo = res.paramInfo
      this.commentInfo = res.commentInfo
      this.goodsList = res.goodsList
    },
    // goods图片加载完成
    imgLoad() {
      const { param, comment, recommend } = this.$refs
      this.detailTops = [0, param.$el.offsetTop, comment.$el.offsetTop, recommend.$el.offsetTop, Number.MAX_VALUE]
    },
    // better-scroll滚动
    contentScroll(position) {
      this._contentScroll(position, 1000).then(position => {
        const y = -position.y
        const arr = this.detailTops
        for (let i = 0, len = arr.length - 1; i < len; i++) {
          if(arr[i] <= y && y < arr[i + 1]) {
            if (this.currentIndex !== i) this.currentIndex = i
            break
          }
        }
      })
    },
    // title点击
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailTops[index])
    },
    // 添加购物车
    addToCart() {
      const { id, src, title, desc, price } = this.goods
      const goods = {
        id,
        src,
        title,
        desc,
        price
      }
      // this.$store.dispatch('addToCart', goods)
      this.addCart(goods)
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
