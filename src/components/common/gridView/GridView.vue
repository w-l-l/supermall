<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'GridView',
  props: {
    cols: {
      type: Number,
      default: 2
    },
    hMargin: {
      type: Number,
      default: 8
    },
    vMargin: {
      type: Number,
      default: 8      
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  mounted() {
    setTimeout(this.autoLayout, 300)
  },
  updated() {
    this.autoLayout()
  },
  methods: {
    autoLayout() {
      const gridEl = this.$refs.gridView

      // 获取所有字节点元素
      const children = gridEl.children

      // 设置gridEl内边距
      gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`

      // 计算item的宽度
      const itemWidth = (gridEl.clientWidth - 2 * this.hMargin - (this.cols - 1) * this.itemSpace) / this.cols
      for (let i = 0, len = children.length; i < len; i++) {
        const item = children[i]
        item.style.width = itemWidth + 'px'
        if ((i + 1) % this.cols !== 0) {
          item.style.marginRight = this.itemSpace + 'px'
        }
        if (i >= this.cols) {
          item.style.marginTop = this.lineSpace + 'px'
        }
      }
      this.$emit('comFinish')
    }
  }
}
</script>

<style lang="less" scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
