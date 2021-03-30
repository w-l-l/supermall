<template>
  <div class="profile">
    <nav-bar class="nav-bar">
      <div slot="center">我的档案</div>
    </nav-bar>
    <user-info />
    <account-info />
  </div>
</template>

<script>
import NavBar from 'components/common/navBar/NavBar'

import UserInfo from './childComps/UserInfo'
import AccountInfo from './childComps/AccountInfo'

export default {
  name: 'Profile',
  components: {
    NavBar,
    UserInfo,
    AccountInfo
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
