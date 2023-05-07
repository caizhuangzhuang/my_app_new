<template>
  <div class="home">
    <div class="banners">
      <swiper
        :space-between="50"
        loop
        autoplay
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        :key="banner.id"
        <swiper-slide v-for="banner in banners">
          <img :src="dalImg(banner.coverImage)" :alt="banner.name"
        /></swiper-slide>
      </swiper>
    </div>
    <div class="luntan">
      <div v-for="forum in forums">
        <img :src="dalImg(forum.coverImage)" alt="" />
        <a href="">{{ forum.name }}</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { loadBannersAPI } from "../services/banners";
import { loadForumsAPI } from "../services/forums";
import { dalImg } from "../utils/tools";
// 轮播图
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const banners = ref([]);
const forums = ref([]);
async function fetchBanners() {
  let result = await loadBannersAPI();
  banners.value = result.data.data;
}

// 轮播图部分
const onSwiper = (swiper) => {};
const onSlideChange = () => {};

// 板块信息
async function fetchForums() {
  let result = await loadForumsAPI();
  forums.value = result.data.data;
}
// 进入页面就加载接口数据
onMounted(() => {
  fetchBanners();
  fetchForums();
});
</script>

<style scoped lang="less">
.banners {
  img {
    max-width: 100%;
    max-height: 10rem;
  }
}
.luntan {
  width: 100%;
  height: 5rem;

  img {
    max-width: 50%;
    max-height: 50%;
  }
}
</style>
