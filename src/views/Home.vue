<template>
  <div class="home">首页</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { loadBannersAPI } from "../services/banners";

const banners = ref([]);
async function fetchBanners() {
  let result = await loadBannersAPI();
  banners.value = result.data.data;
}
// 进入页面就加载接口数据
onMounted(() => {
  fetchBanners();
});
</script>
