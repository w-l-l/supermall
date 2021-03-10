<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="scroll" ref="scroll"></scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNabBar'

import Scroll from 'components/common/scroll/Scroll'

import { getDetail } from 'network/detail'

export default {
  name: 'Detail',
  components: {
    DetailNavBar,
    Scroll
  },
  created() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  data() {
    return {
      id: 0
    }
  },
  methods: {
    // 获取详情数据
    async getDetail() {
      const res = await getDetail(this.id)
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
