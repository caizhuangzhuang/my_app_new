<template>
  <div class="user">
    <span>修改个人信息</span>
    <input type="file" style="display: none" ref="fileTag" />
    <img
      :src="dalImg(imgUrl)"
      alt=""
      class="avatar"
      @click="selImg"
      @change="selEnd"
    />
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
// 引入默认导出的网络请求instance
import axios from "../utils/request";
import "vant/lib/index.css";

const router = useRouter();
const mydata = ref([]);
const imgUrl = ref("");
const userAge = ref("");
const fileTag = ref();
const userNickName = ref("");

async function loadUserser() {
  const result = await loadUserserAPI();
  mydata.value = result.data.data;
  imgUrl.value = result.data.data.coverImage; //设置展示的头像的地址
  userAge.value = result.data.data.age;
  userNickName.value = result.data.data.nickName;
}
const save = async () => {
  if (userAge.value && userNickName.value) {
    const result = await changeuserinfoAPI({
      nickName: userNickName.value,
      age: userAge.value,
      avatar: imgUrl.value,
    });
    showSuccessToast(result.data.msg);
    // 修改成功后跳转到我的页面
    router.replace({ name: "User" });
  } else {
    showFailToast("请输入内容");
  }
};

// 点击图片出现选择图片
const selImg = () => {
  //触发这个标签的点击事件
  fileTag.value.click();
};
// 选择图片后
const selEnd = () => {
  console.log(fileTag.value.files);
  const formData = new FormData();
  formData.append("file", fileTag.value.files[0]);
  axios.post("/api/v1/common/upload_file", formData).then((res) => {
    // 设置成功后设置上传成功的图片
    imgUrl.value = res.data;
  });
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
