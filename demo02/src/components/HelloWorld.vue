<template>
  <h1>{{ msg }}</h1>
  <div>
    123
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<style lang="less" scoped>
div {
  // color: @c1;
}
</style>
