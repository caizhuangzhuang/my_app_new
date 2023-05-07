<template>
  <div class="reg">
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
        <Field
          v-model="repwd"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <Button round block type="primary" native-type="submit"> 注册 </Button>
      </div>
    </Form>
    <router-link :to="{ name: 'Login' }">已有账号，我要登录</router-link>
  </div>
</template>

<script setup>
import { regAPI } from "../services/reg";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { setToken } from "../utils/tools";
import {
  Form,
  Field,
  CellGroup,
  Button,
  showSuccessToast,
  showFailToast,
} from "vant";
import "vant/lib/index.css";
const username = ref("");
const password = ref("");
const repwd = ref("");
const { replace } = useRouter();
const onSubmit = async (values) => {
  if (username.value && password.value && repwd.value) {
    console.log("submit", values);
    if (password.value == repwd.value) {
      const result = await regAPI({
        userName: username.value,
        password: password.value,
      });
      if (result.data.code == 1) {
        showSuccessToast("注册成功");
        setToken(result.data.data);
        // replace   之后跳转到登录页
        replace({
          name: "Login",
        });
      }
    } else {
      showFailToast("两次输入密码不一致");
    }
  } else {
    showFailToast("请填写全面");
  }
};
</script>
