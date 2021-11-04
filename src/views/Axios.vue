<template>
  <div>{{ testMsg }}</div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import axios from '../utils/axios'
import { useStore } from 'vuex'

export default {
  setup() {
    const testMsg = ref('Axios View')
    const store = useStore()

    onMounted(() => {
      console.log(store.getters['app/test'])
    })

    axios({
      url: '/users/XPoet',
      method: 'GET'
    })
      .then(res => {
        console.log('res ', res)
      })
      .catch(err => {
        console.log('err ', err)
      })

    return { testMsg }
  }
}
</script>

<style scoped lang="scss"></style>
