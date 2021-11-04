<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>()

const testMsg = ref("Home View");
</script>

<template>
  <div class="testDiv">
    <span>{{ testMsg }}</span>
    <img src="/static/img/nft1.png" alt="">
    <div class="imageDiv"></div>
  </div>
</template>

<style scoped lang="scss">
.testDiv {
  background: red;
  span {
    color: yellow;
  }
}
.imageDiv {
  background-image: url('/static/img/nft2.png');
  width: 100%;
  height: 200px;
}
</style>
