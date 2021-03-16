import BackTop from 'components/content/backTop/BackTop'

export const backTopMixin = {
  components: {
    BackTop
  },
  data() {
    return {
      isShowBackTop: false
    }
  },
  methods: {
    // 回到顶部
    _backClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    // 是否显示回到顶部按钮
    _contentScroll(position, scrollY = 1000) {
      return new Promise(resolve => {
        const y = -position.y
        this.isShowBackTop = y >= scrollY
        resolve(position)
      })
    }
  }
}
