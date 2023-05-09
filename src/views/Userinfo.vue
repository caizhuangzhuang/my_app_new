<template>
  <div class="user">
    <span>修改个人信息</span>
    <img :src="dalImg(mydata.avatar)" alt="" class="avatar" />
    <p>年龄：{{ mydata.age }}</p>
    <p>昵称：{{ mydata.userName ? mydata.nickName : mydata.userName }}</p>
    <p>积分：{{ mydata.score }}</p>
    <cell-group inset>
      <field v-model="userAge" label="年龄" placeholder="请输入用户名" />
    </cell-group>
    <cell-group inset>
      <field v-model="userNickName" label="昵称" placeholder="请输入用户名" />
    </cell-group>
    <Button type="primary" size="large" @click="save">保存</Button>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  Field,
  CellGroup,
  showFailToast,
  showSuccessToast,
  Button,
} from "vant";
import { dalImg } from "../utils/tools";
import { loadUserserAPI } from "../services/user";
import { changeuserinfoAPI } from "../services/userInfo";
import "vant/lib/index.css";

const router = useRouter();
const mydata = ref([]);
const userAge = ref("");
const userNickName = ref("");

async function loadUserser() {
  const result = await loadUserserAPI();
  mydata.value = result.data.data;
  userAge.value = result.data.data.age;
  userNickName.value = result.data.data.nickName;
}
const save = async () => {
  if (userAge.value && userNickName.value) {
    const result = await changeuserinfoAPI({
      nickName: userNickName.value,
      age: userAge.value,
    });
    showSuccessToast(result.data.msg);
    // 修改成功后跳转到我的页面
    router.replace({ name: "User" });
  } else {
    showFailToast("请输入内容");
  }
};
onMounted(() => {
  loadUserser();
});
</script>

<style scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
