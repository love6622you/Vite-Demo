<template>
  <div>{{ testMsg }}</div>
</template>

<script lang="ts">
import {} from "vue";
import { ref } from "vue";
import axios from "../utils/axios";

export default {
  setup() {
    const testMsg = ref("Axios View");

    axios({
      url: "/users/XPoet",
      method: "GET"
    })
      .then((res) => {
        console.log("res ", res);
      })
      .catch((err) => {
        console.log("err ", err);
      });

    return { testMsg };
  }
};
</script>

<style scoped lang="scss"></style>
