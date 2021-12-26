<!--
 * @Descripttion: 
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-12-26 21:53:44
 * @LastEditors: Charles Guo
 * @LastEditTime: 2021-12-26 21:57:47
-->
<template>
  <SideBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SideBar,
  },
});
</script>

<style scoped lang="scss"></style>
