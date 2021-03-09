<template>
  <div class="detail"></div>
</template>

<script>
import { getDetail } from 'network/detail'

export default {
  name: 'Detail',
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
</style>
