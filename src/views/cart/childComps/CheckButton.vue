<template>
  <div class="icon-select" :class="{ active: checked }" @click="selectItem">
    <img src="~/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    checked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 是否选中
    selectItem() {
      this.$emit('checkBtn')
    }
  }
}
</script>

<style lang="less" scoped>
.icon-select {
  position: relative;
  margin: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #ccc;
  cursor: pointer;
  &.active {
    background-color: #ff8198;
    border-color: #ff8198;
  }
  img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
  }
}
</style>
