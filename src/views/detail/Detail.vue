<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll">
      <detail-swiper :top-imgs="imgs"></detail-swiper>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNabBar'
import DetailSwiper from './childComps/DetailSwiper'

import Scroll from 'components/common/scroll/Scroll'

// import { getDetail } from 'network/detail'
import { mockDetail } from './mock/detail';

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    Scroll,
    DetailSwiper
  },
  created() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  data() {
    return {
      id: 0,
      imgs: ['https://s10.mogucdn.com/mlcdn/c45406/171026_8fe9b4a7b75fe427lb94jfgee4la2_750x376.jpg']
    }
  },
  methods: {
    // 获取详情数据
    async getDetail() {
      // const res = await getDetail(this.id)
      const res = await mockDetail()
      this.imgs = res.imgs
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
  }
}
</style>
