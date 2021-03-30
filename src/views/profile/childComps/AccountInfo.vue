<template>
  <div class="account-info">
    <div class="account-item">
      <div class="number">
        <span class="balance">0.00</span>
        <span>元</span>
      </div>
      <div class="account-text">我的余额</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>
        <span>个</span>
      </div>
      <div class="account-text">我的优惠</div>
    </div>
    <div class="account-item">
      <div class="number">
        <span class="balance">0</span>
        <span>分</span>
      </div>
      <div class="account-text">我的积分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountInfo'
}
</script>

<style lang="less" scoped>
.account-info {
  display: flex;
  .account-item {
    flex: 1;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
    color: #666;
    font-size: 13px;
    padding: 18px;
    &:last-of-type {
      margin-right: 0;
    }
    .number > .balance {
      font-size: 24px;
      font-weight: bold;
      color: #ff5f3e;
    }
    .account-text {
      margin-top: 6px;
    }
  }
}
</style>
