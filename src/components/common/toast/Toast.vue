<template>
  <transition name="fade">
    <div class="toast" v-show="isShow">{{ message }}</div>
  </transition>
</template>

<script>
export default {
  name: 'Toast',
  data () {
    return {
      isShow: false,
      message: ''
    }
  }
}
</script>

<style lang="less" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px;
  border-radius: 5px;
  color: #fff;
  z-index: 99;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
