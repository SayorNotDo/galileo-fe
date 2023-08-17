<template>
  <div @mouseenter="showMenu" @mouseleave="hideMenu" class="trigger-area"></div>
  <a-menu
    class="menu-container"
    @mouseenter="showMenu"
    @mouseleave="hideMenu"
    mode="popButton"
    breakpoint="xl"
    v-if="isMenuVisible"
  >
    <a-menu-item key="0">
      <template #icon>
        <icon-tag />
      </template>
      {{ $t('test-analysis.dashboard.MyDashboard') }}
    </a-menu-item>
    <a-menu-item key="1">
      <template #icon>
        <icon-share-alt />
      </template>
      {{ $t('test-analysis.dashboard.SharingDashboard') }}
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <icon-more />
      </template>
      {{ $t('test-analysis.dashboard.More') }}
    </a-menu-item>
  </a-menu>
</template>

<script>
  import { ref } from 'vue';

  export default {
    name: 'side-bar',
    setup() {
      const isMenuVisible = ref(false);

      const showMenu = () => {
        isMenuVisible.value = true;
      };

      const hideMenu = () => {
        isMenuVisible.value = false;
      };

      return {
        isMenuVisible,
        showMenu,
        hideMenu,
      };
    },
  };
</script>

<style scoped>
  .trigger-area {
    position: absolute;
    width: 5%;
    height: 10%;
    z-index: 99;
  }

  .menu-container {
    position: absolute;
    top: 64px;
    left: 16px;
    z-index: 99;
  }
</style>
