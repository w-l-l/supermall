<template>
  <swiper ref="swiper" :interval="3000" :animDuration="300" :moveRatio="0.25" showIndicator @transitionEnd="transitionEnd">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'components/common/swiper'

export default {
  name: 'HomeSwiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    // 轮播切换
    transitionEnd(index) {
      this.$emit('transitionEnd', index)
    },
    // 开启轮播
    startTimer() {
      this.$refs.swiper.startTimer()
    },
    // 停止轮播
    stopTimer() {
      this.$refs.swiper.stopTimer()
    },
  }
}
</script>

<style lang="less" scoped></style>
