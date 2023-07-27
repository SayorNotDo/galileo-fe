<template>
  <div class="container">
    <a-grid :col="24" :col-gap="4">
      <a-grid-item :span="{ xs: 16, sm: 16, md: 16, lg: 8, xl: 8, xxl: 8 }">
        <Condition />
      </a-grid-item>
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 16, xl: 16, xxl: 16 }">
        <a-card
          class="card"
          :bordered="false"
          :style="{ height: '100%' }"
          :body-style="{ padding: '4px', height: '500px' }"
          ><Filter /> <Report
        /></a-card>
      </a-grid-item>
    </a-grid>
  </div>
</template>

<script>
  import Condition from '@/views/test-analysis/analysis/components/condition.vue';
  import Report from '@/views/test-analysis/analysis/components/report.vue';
  import Filter from '@/views/test-analysis/analysis/components/filter.vue';

  export default {
    name: 'index',
    components: { Filter, Report, Condition },
  };
</script>

<style scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px 0;
  }
  .card {
    height: 85vh;
  }
</style>
