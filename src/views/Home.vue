<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>()

const testMsg = ref("Home View");
</script>

<template>
  <div class="testDiv">
    <span>{{ testMsg }}</span>
  </div>
</template>

<style scoped lang="scss">
.testDiv {
  background: red;
  span {
    color: yellow;
  }
}
</style>
