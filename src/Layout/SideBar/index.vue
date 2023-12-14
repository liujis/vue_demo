<template>
  <el-menu 
    :collapse="false" 
    background-color="#001529"
    text-color="#ffffffb3"
    active-text-color="#fff"
  >
    <el-sub-menu index="1">
      <template #title>
        <span>菜单一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="1-1">菜单1-1</el-menu-item>
        <el-menu-item index="1-2">菜单1-2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group>
        <el-menu-item index="1-3">菜单1-3</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>菜单1-4</span></template>
        <el-menu-item index="1-4-1">菜单1-4-1</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <template #title>菜单二</template>
    </el-menu-item>
    <el-menu-item index="3">
      <template #title>菜单三</template>
    </el-menu-item>
    <el-menu-item index="4">
      <template #title>菜单无</template>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
  :deep(.el-menu-item) {
    &:hover {
      color: #FFF;
    }
    &.is-active {
      background-color: #0960bd;
    }
  }
  :deep(.el-sub-menu__title) {
    &:hover {
      color: #FFF;
    }
  }
</style>