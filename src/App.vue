<template>
  <el-config-provider size="small" :z-index="2000" :locale="zhCn">
    <RouterView />
  </el-config-provider>
</template>

<script setup lang="ts">
  import zhCn from 'element-plus/es/locale/lang/zh-cn'

</script>

<style scoped>
  
</style>
