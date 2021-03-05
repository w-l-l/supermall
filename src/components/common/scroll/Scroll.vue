<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    }
  },
  mounted() {
    // 创建BScroll对象
    this.scroll = new BScroll(this.$refs.warpper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    // 滚动监听
    this.scroll.on('scroll', position => this.$emit('scroll', position))
    // 上拉监听
    this.pullUpLoad && this.scroll.on('pullingUp', () => this.$emit('pullingUp'))
  },
  methods: {
    // 滚动的位置
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    },
    // 下拉完成
    finishPullUp() {
      this.scroll.finishPullUp()
    },
    // 更新BScroll
    refresh() {
      this.$nextTick(() => this.scroll.refresh())
    }
  }
}
</script>

<style lang="less" scoped></style>
