<template>
  <div class="nav">
    <div class="item">
      <router-link :to="{ name: 'Home' }">首页</router-link>
    </div>
    <div class="item">
      <router-link :to="{ name: 'List' }">热议</router-link>
    </div>
    <div class="item">
      <router-link :to="{ name: 'Notivces' }">公告</router-link>
    </div>
    <div class="item">
      <router-link :to="{ name: 'User' }">我的</router-link>
    </div>
  </div>
</template>

<style scoped lang="less">
.nav {
  border-top: 1px solid red;
  width: 100%;
  display: flex;
  .item {
    text-align: center;
    width: 25%;
    height: 6vh;
    line-height: 6vh;
  }
}
</style>
