<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <aside class="layout-slider">
      <AppLogo></AppLogo>
      <SideBar></SideBar>
    </aside>
    <!-- 右侧区域 -->
    <section class="layout-main">
      <!-- 顶部区域 -->
      <div class="layout-multiple-header">
        <header class="layout-header">
          顶部区域
        </header>
        <header class="multiple-tabs">
          卡片
        </header>
      </div>
      <!-- 内容区域 -->
      <div class="layout-content">
        <RouterView />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
  import SideBar from '@/Layout/SideBar/index.vue'

</script>

<style lang="scss" scoped>
  .layout-container {
    width: 100%;
    height: 100vh;
    display: flex;
    .layout-slider {
      color: #FFF;
      width: 210px;
      background-color: #001529;
      overflow: auto;
    }
    .layout-main {
      flex: 1;
      border: 1px solid #DDD;
      .layout-multiple-header {
        height: 80px;
        border: 1px solid #DDD;
        .layout-header {
          height: 48px;
          border: 1px solid #DDD;
        }
        .multiple-tabs {
          height: 32px;
          border: 1px solid #DDD;
        }
      }
      .layout-content {
        height: calc(100% - 80px);
        border: 1px solid #DDD;
      }
    }

  }
</style>