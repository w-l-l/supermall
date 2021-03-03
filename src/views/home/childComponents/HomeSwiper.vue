<template>
  <swiper :interval="3000" :animDuration="300" :moveRatio="0.25" showIndicator @transitionEnd="transitionEnd">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'components/common/swiper/Swiper'
import SwiperItem from 'components/common/swiper/SwiperItem'

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
    transitionEnd(index) {
      console.log(index)
    }
  }
}
</script>

<style lang="less" scoped></style>
