<template>
  <div class="posts">
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
    <PostItem />
  </div>
</template>

<script lang="ts">
import PostItem from "@/components/PostItem.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    PostItem,
  },
});
</script>

<style lang="scss">
.posts {
  max-width: 38rem;
  padding: 4rem 0;
  margin: 0 4rem;
}
</style>
