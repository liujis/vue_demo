<template>
  测试
</template>

<script setup lang="ts">
  type Recordable<T = any> = {
      [x: string]: T;
  }

  const obj: Record<string, number> = {
    name: 1,
    age: 1
  }

</script>

<style scoped>
  
</style>