<template>
  <div class="container">
    <a-grid
      :cols="24"
      :col-gap="16"
      :row-gap="16"
      :style="{ margin: '16px 16px 16px 16px' }"
    >
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <ApiCard />
      </a-grid-item>
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <CaseCard />
      </a-grid-item>
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <SceneCard />
      </a-grid-item>
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <SceneTimerCard />
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script lang="ts" setup>
  import ApiCard from '@/views/api-test/dashboard/components/api-card.vue';
  import CaseCard from '@/views/api-test/dashboard/components/case-card.vue';
  import SceneCard from '@/views/api-test/dashboard/components/scene-card.vue';
  import SceneTimerCard from '@/views/api-test/dashboard/components/scene-timer-card.vue';
</script>

<script lang="ts">
  export default {
    name: 'ApiIndex',
  };
</script>

<style scoped></style>
