<template>
  <div class="tab-content-category">
    <grid-view :cols="3" :line-space="15" :v-margin="20" v-if="subcategories.length" @comFinish="comFinish">
      <div class="item" v-for="(item, index) in subcategories" :key="index">
        <a href="javascript:;">
          <img class="item-img" :src="item.src" alt="">
          <div class="item-text">{{ item.title }}</div>
        </a>
      </div>
    </grid-view>
  </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView'

export default {
  name: 'TabContentCategory',
  components: {
    GridView
  },
  props: {
    subcategories: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    // GridView计算完成
    comFinish() {
      this.$emit('refreshTabContent')
    }
  }
}
</script>

<style lang="less" scoped>
.tab-content-category {
  .item {
    text-align: center;
    font-size: 12px;
    .item-img {
      width: 80%;
    }
    .item-text {
      margin-top: 12px;
    }
  }
}
</style>
