<template>
  <a-card
    :title="$t('menu.test-analysis.analysis')"
    size="small"
    class="card"
    :bordered="false"
  >
    <a-form
      :form="form"
      :style="{ width: '100%', height: '100%' }"
      auto-label-width
    >
      <a-card :title="$t('menu.test-analysis.indicator')" :bordered="false">
        <a-form-item>
          <a-row :gutter="4">
            <a-col :span="14">
              <a-select></a-select>
            </a-col>
            <a-col :span="10">
              <a-select></a-select>
            </a-col>
          </a-row>
        </a-form-item>
        <div>
          <a-button type="outline" size="mini">
            <template #icon>
              <icon-plus></icon-plus>
            </template>
            {{ $t('menu.test-analysis.addIndicator') }}
          </a-button>
        </div>
      </a-card>
      <a-card :title="$t('menu.test-analysis.globalFilter')" :bordered="false">
        <a-button type="outline" size="mini">
          <template #icon>
            <icon-plus></icon-plus>
          </template>
          {{ $t('menu.test-analysis.addFilter') }}
        </a-button>
      </a-card>
      <a-card :title="$t('menu.test-analysis.group')" :bordered="false">
        <a-button type="outline" size="mini">
          <template #icon>
            <icon-plus></icon-plus>
          </template>
          {{ $t('menu.test-analysis.addGroup') }}
        </a-button>
      </a-card>
      <a-card
        :bordered="false"
        :style="{ position: 'absolute', bottom: '0', right: '0' }"
      >
        <a-button type="outline">
          {{ $t('menu.test-analysis.calculate') }}
        </a-button>
      </a-card>
    </a-form>
  </a-card>
</template>

<script>
  import { reactive } from 'vue';

  export default {
    name: 'condition',
    setup() {
      const form = reactive({});
      return {
        form,
      };
    },
  };
</script>

<style scoped>
  .card {
    height: 85vh;
  }
</style>
