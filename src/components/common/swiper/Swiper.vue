<template>
  <div class="swiper-warpper">
    <div class="swiper" ref="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <div class="indicator" v-if="showIndicator && slideCount > 1">
      <slot name="indicator">
        <div v-for="(item, index) in slideCount" :key="index" class="indicator-item" :class="{ active: index === currentIndex - 1 }"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      slideCount: 0, // 元素个数
      totalWidth: 0, // swiper的宽度
      swiperStyle: {}, // swiper的样式
      currentIndex: 1, // 当前的index
      scrolling: false, // 是否正在滚动
      timer: 0, // 定时器
      startX: 0, // 开始滑动的位置
      currentX: 0, // 滑动中的位置
      distance: 0 // 滑动的距离
    }
  },
  mounted() {
    setTimeout(() => {
      this.handleDom()
      this.startTimer()
    }, 500)
  },
  methods: {
    // 操作DOM，在前后添加slide
    handleDom() {
      const swiper = this.$refs.swiper
      const slides = swiper.querySelectorAll('.slide')
      // 保存个数
      this.slideCount = slides.length

      // 元素个数大于1，才在前后添加一个slide
      if (this.slideCount > 1) {
        const cloneFirstSlide = slides[0].cloneNode(true)
        const cloneLastSlide = slides[this.slideCount - 1].cloneNode(true)
        swiper.appendChild(cloneFirstSlide)
        swiper.insertBefore(cloneLastSlide, slides[0])
        this.totalWidth = swiper.offsetWidth
        this.swiperStyle = swiper.style
      }

      // 让swiper元素显示第一个（目前是显示前面添加的最后一个元素）
      this.setTransform(-this.totalWidth)
    },
    // 设置swiper滚动位置
    setTransform(position) {
      const attr = `translateX(${position}px)`
      this.swiperStyle.transform = attr
      this.swiperStyle['-webkit-transform'] = attr
      this.swiperStyle['-ms-transform'] = attr
    },
    // 定时器开启
    startTimer() {
      this.stopTimer()
      this.timer = setInterval(() => {
        this.currentIndex++
        this.scrollContent(-this.currentIndex * this.totalWidth)
      }, this.interval)
    },
    // 定时器关闭
    stopTimer() {
      clearInterval(this.timer)
    },
    // 滚动到正确位置
    scrollContent(position) {
      // 设置正在滚动
      this.scrolling = true

      // 开始滚动动画
      this.swiperStyle.transition = `transform ${this.animDuration}ms`
      this.setTransform(position)

      // 判断滚动到的位置
      this.checkPosition()

      // 滚动完成
      this.scrolling = false
    },
    // 校验正确的位置
    checkPosition() {
      setTimeout(() => {
        this.swiperStyle.transition = 'transform 0ms'
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1
          this.setTransform(-this.currentIndex * this.totalWidth)
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount
          this.setTransform(-this.currentIndex * this.totalWidth)
        }

        // 结束移动后的回调
        this.$emit('transitionEnd', this.currentIndex - 1)
      }, this.animDuration)
    },
    // 滑动开始
    touchStart(e) {
      // 如果正在滚动，不可以拖动
      if (this.scrolling) return

      // 关闭定时器
      this.stopTimer()

      // 保存开始滚动的位置
      this.startX = e.touches[0].pageX
    },
    // 滑动中
    touchMove(e) {
      // 计算用户拖动的距离
      this.currentX = e.touches[0].pageX
      this.distance = this.currentX - this.startX
      const currentPosition = -this.currentIndex * this.totalWidth
      const moveDistance = this.distance + currentPosition

      // 设置当前的位置
      this.setTransform(moveDistance)
    },
    // 滑动结束
    touchEnd(e) {
      // 获取移动的距离
      const currentMove = Math.abs(this.distance)
      if (currentMove === 0) return

      // 滑动比例是否超过this.moveRatio
      const overRatio = currentMove > this.totalWidth * this.moveRatio
      if (this.distance > 0 && overRatio) { // 向右滑动
        this.currentIndex--
      } else if (this.distance < 0 && overRatio) { // 向左滑动
        this.currentIndex++
      }

      // 移动到正确的位置
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 滑动结束开启定时器
      this.startTimer()
    },
    // 控制上一个
    prev() {
      this.changeItem(-1)
    },
    // 控制下一个
    next() {
      this.changeItem(1)
    },
    // 控制切换
    changeItem(num) {
      // 关闭定时器
      this.stopTimer()

      // 修改index和位置
      this.currentIndex += num
      this.scrollContent(-this.currentIndex * this.totalWidth)

      // 开启定时器
      this.startTimer()
    }
  }
}
</script>

<style lang="less" scoped>
.swiper-warpper {
  position: relative;
  overflow: hidden;
  .swiper {
    display: flex;
  }
  .indicator {
    display: flex;
    justify-content: center;
    position: absolute;
    width: 100%;
    bottom: 8px;
    .indicator-item {
      box-sizing: border-box;
      width: 8px;
      height: 8px;
      border-radius: 4px;
      background-color: #fff;
      line-height: 8px;
      text-align: center;
      font-size: 12px;
      margin: 0 5px;
      &.active {
        background-color: rgba(212, 62, 46, 1);
      }
    }
  }
}
</style>
