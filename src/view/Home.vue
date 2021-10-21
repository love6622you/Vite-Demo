<script setup lang="ts">
import { ref } from "vue";

// defineProps<{ msg: string }>()

const testMsg = ref("Home View");
</script>

<template>
  <div>{{ testMsg }}</div>
</template>

<style scoped lang="scss"></style>
