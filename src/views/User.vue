<template>
  <div class="user">
    <span>个人信息</span>
    <img :src="dalImg(mydata.avatar)" alt="" class="avatar" />
    <p>年龄：{{ mydata.age }}</p>
    <p>昵称：{{ mydata.userName ? mydata.nickName : mydata.userName }}</p>
    <p>积分：{{ mydata.score }}</p>
    <div class="model">
      <router-link :to="{ name: 'UserInfo' }">修改个人信息</router-link>
      <button @click="rovetk">退出登录</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { removeToken, dalImg } from "../utils/tools";
import { loadUserserAPI } from "../services/user";
const mydata = ref([]);

async function loadUserser() {
  const result = await loadUserserAPI();
  mydata.value = result.data.data;
}
function rovetk() {
  removeToken();
}
onMounted(() => {
  loadUserser();
});
</script>
<style scoped lang="less">
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
