<template>
  <swiper class="detail-swiper">
    <swiper-item class="detail-swiper-item" v-for="(item, index) in topImgs" :key="index">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImgs: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail-swiper {
  height: 300px;
  overflow: hidden;
  .detail-swiper-item img {
    width: 100%;
    height: 100%;
  }
}
</style>
