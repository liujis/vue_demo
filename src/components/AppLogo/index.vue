<template>
  <div class="layout-menu-logo">
    <img src="../../assets//logo.png" />
    <div class="app-logo-title">
      {{ title }}
    </div>
  </div>
</template>

<script setup lang="ts">
  import { getAppEnvConfig } from '@/utils/env'
  const { title } = getAppEnvConfig()
</script>

<style lang="scss" scoped>
  .layout-menu-logo {
    height: 48px;
    padding: 10px 4px 10px 10px;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
    }
    img {
      width: 32px;
      height: 32px;
    }
    .app-logo-title {
      color: #FFF;
      margin-left: 0.5rem;
      font-size: 16px;
      font-weight: 700;
      text-align: center
    }
  }
</style>