<template>
  <el-form
    ref="formElRef"

  >
    <el-row>
      <slot name="formHeader"></slot>
      
      <slot name="formFooter"></slot>
    </el-row>


  </el-form>
</template>

<script setup lang="ts">


</script>

<style scoped>
  
</style>