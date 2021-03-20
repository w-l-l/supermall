<template>
  <div class="cart-list">
    <cart-list-item v-for="(item, index) in cartList" :key="index" :itemInfo="item" />
  </div>
</template>

<script>
import CartListItem from './CartListItem'

export default {
  name: 'CartList',
  components: {
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
