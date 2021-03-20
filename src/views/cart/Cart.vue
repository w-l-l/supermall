<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartList.length }})</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <cart-list :cartList="cartList" />
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'
import Scroll from 'components/common/scroll/Scroll'

import CartList from './childComps/CartList'

import { mapState } from 'vuex'

export default {
  name: 'Cart',
  components: {
    NavBar,
    Scroll,
    CartList
  },
  computed: {
    ...mapState(['cartList'])
  },
  // 进入页面更新better-scroll
  activated() {
    this.$refs.scroll.refresh()
  }
}
</script>

<style lang="less" scoped>
.cart {
  position: relative;
  background-color: #fff;
  height: 100vh;
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
  .scroll {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 49px;
    overflow: hidden;
  }
}
</style>
