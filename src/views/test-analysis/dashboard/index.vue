<template>
  <a-layout class="layout-wrapper container">
    <SideBar />
    <a-layout-header>
      <Toolbar />
    </a-layout-header>
    <a-layout-content>
      <div v-if="noReport">
        <a-empty />
        <div
          :style="{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }"
        >
          <a-button type="outline"
            >{{ $t('test-analysis.dashboard.addReport') }}
          </a-button>
        </div>
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script lang="ts" setup>
  import SideBar from '@/views/test-analysis/dashboard/components/sideBar.vue';
  import Toolbar from '@/views/test-analysis/dashboard/components/toolbar.vue';

  const noReport = true;
</script>

<style scoped lang="less">
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px 0;
    display: flex;
  }

  .layout-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
