<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info />
    <account-info />
    <normal-list-view :listData="orderList" />
    <normal-list-view :listData="serviceList" />
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'
import NormalListView from './childComps/NormalListView'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView
  },
  data() {
    return {
      orderList: [
        { icon: 'message.svg', info: '我的消息' },
        { icon: 'pointer.svg', info: '积分商城' },
        { icon: 'vip.svg', info: '会员卡' }
      ],
      serviceList: [
        { icon: 'cart.svg', info: '我的购物车' },
        { icon: 'shopping.svg', info: '下载购物APP' }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.profile {
  background-color: #f2f2f2;
  .nav-bar {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: bold;
  }
}
</style>
