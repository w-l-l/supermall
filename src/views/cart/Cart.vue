<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartList.length }})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar
  },
  computed: {
    ...mapState(['cartList'])
  }
}
</script>

<style lang="less" scoped>
.cart .nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>
