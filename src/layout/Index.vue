<!--
 * @Descripttion: 
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-12-26 21:53:44
 * @LastEditors: Charles Guo
 * @LastEditTime: 2022-01-01 23:23:32
-->
<template>
  <div class="container">
    <SideBar />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "@/components/SideBar.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    SideBar,
  },
});
</script>

<style lang="scss">
.container {
  display: flex;
  overflow: hidden;
  max-height: 100vh;
  min-height: 100vh;
  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
