<template>
  <div class="login">
    <Form @submit="onSubmit">
      <van-cell-group inset>
        <Field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <Field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <Button round block type="primary" native-type="submit"> 提交 </Button>
      </div>
    </Form>
    <router-link :to="{ name: 'Reg' }">没有账号，我要注册</router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { setToken } from "../utils/tools";
import {
  Form,
  Field,
  CellGroup,
  Button,
  showSuccessToast,
  showFailToast,
} from "vant";
import { loginAPI } from "../services/login";
import "vant/lib/index.css";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const { replace } = useRouter();

const onSubmit = async (values) => {
  // console.log(values);
  const result = await loginAPI({
    userName: username.value,
    password: password.value,
  });
  if (result.data.code == 1) {
    showSuccessToast("登陆成功");
    setToken(result.data.data);
    replace({
      name: "User",
    });
  } else {
    showFailToast(result.data.data);
  }
};
</script>
