<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" class="tab-control-item" :class="{ active: index === currentIndex }" @click="itemclick(index)">
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemclick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang="less" scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
  overflow-x: auto;
  .tab-control-item{
    flex: 1 0 25%;
    span{
      padding: 5px;
    }
    &.active{
      color: var(--color-high-text);
      span{
        border-bottom: 3px solid var(--color-tint);
      }
    }
  }
}
</style>
