<script setup>
import TabBar from "./components/TabBar.vue";
</script>

<template>
  <div class="box"></div>
  <router-view class="content"></router-view>
  <TabBar />
</template>

<style>
.content {
  flex: 1;
  overflow: auto;
}
</style>
