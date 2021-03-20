<template>
  <div class="bottom-menu">
    <div class="select-all">
      <check-button :checked="isAllCheck" @checkBtn="checkAllBtn" />
      <span>全选</span>
    </div>
    <span class="total-price">合计：￥{{ totalPrice }}</span>
    <span class="buy-product">去结算({{ checkLength }})</span>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CartBottomBar',
  components: {
    CheckButton
  },
  computed: {
    ...mapState(['cartList']),
    ...mapGetters(['cartLength']),
    isAllCheck() {
      return !!this.cartLength && this.cartList.every(item => item.checked)
    },
    totalPrice() {
      return this.cartList.reduce((a, b) => a + (b.checked ? b.price * b.count : 0), 0).toFixed(2)
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length
    }
  },
  methods: {
    // 是否全选
    checkAllBtn() {
      const isAllCheck = this.isAllCheck
      this.cartList.forEach(item => item.checked = !isAllCheck)
    }
  }
}
</script>

<style lang="less" scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  right: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .select-all {
    width: 80px;
    padding: 0 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .total-price {
    flex: 1;
    font-size: 16px;
    color: #666;
  }
  .buy-product {
    width: 100px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: orangered;
    color: #fff;
  }
}
</style>
