<template>
  <scroll class="tab-menu" ref="scroll">
    <div class="menu-list">
      <div class="menu-list-item" v-for="(item, index) in categories" :key="index" :class="{ active: index === currentIndex }" @click="itemClick(index)">{{ item.title }}</div>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
  name: 'TabMenu',
  components: {
    Scroll
  },
  props: {
    categories: {
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
    // 点击分类菜单
    itemClick(index) {
      this.currentIndex = index
      this.$emit('selectItem', index)
    },
    // 刷新better-scroll
    refresh() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="less" scoped>
.tab-menu {
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  overflow: hidden;
  .menu-list {
    .menu-list-item {
      height: 45px;
      line-height: 45px;
      text-align: center;
      font-size: 14px;
      &.active {
        font-weight: bold;
        color: var(--color-high-text);
        background-color: #fff;
        border-left: 3px solid var(--color-high-text);
      }
    }
  }
}
</style>
