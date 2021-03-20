<template>
  <div class="cart-list-item">
    <div class="item-select">
      <check-button :checked="itemInfo.checked" @checkBtn="checkBtn" />
    </div>
    <div class="item-img">
      <img :src="itemInfo.src" alt="商品图片">
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">￥{{ itemInfo.price }}</div>
        <div class="item-count">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from './CheckButton'

export default {
  name: 'CartListItem',
  components: {
    CheckButton
  },
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    // 是否选中
    checkBtn() {
      this.itemInfo.checked = !this.itemInfo.checked
    }
  }
}
</script>

<style lang="less" scoped>
.cart-list-item {
  width: 100%;
  display: flex;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  .item-select {
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item-img {
    padding: 5px;
    img {
      width: 80px;
      height: 100px;
      border-radius: 5px;
    }
  }
  .item-info {
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
    .item-title,
    .item-desc {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .item-desc {
      font-size: 14px;
      color: #666;
      margin-top: 15px;
    }
    .info-bottom {
      margin-top: 10px;
      position: absolute;
      bottom: 10px;
      left: 10px;
      right: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .item-price {
        color: orangered;
      }
    }
  }
}
</style>
