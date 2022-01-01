<!--
 * @Descripttion: 
 * @version: 
 * @Author: Charles Guo
 * @Date: 2021-12-26 22:00:22
 * @LastEditors: Charles Guo
 * @LastEditTime: 2022-01-01 23:18:09
-->
<template>
  <div class="post">
    <router-link custom v-slot="{ navigate }" to="/post/666666">
      <h1 @click="navigate" class="post-title">打造高性能web体系</h1>
    </router-link>
    <span class="post-date">31 Dev 2021</span>
    <p class="post-description">
      <router-link custom v-slot="{ navigate }" to="/post/666666">
        <small @click="navigate">打造高性能web体系</small>
      </router-link>
    </p>
    <p class="post-tag">
      <Tag />
    </p>
  </div>
</template>

<script lang="ts">
import Tag from "./Tag.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    Tag,
  },
});
</script>

<style></style>
