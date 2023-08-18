<template>
  <a-form
    :model="apiForm"
    :style="{ padding: '16px 20px 0 20px' }"
    auto-label-width
  >
    <a-row :gutter="10" :style="{ marginBottom: '16px' }">
      <a-col>
        <BaseContent />
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <a-card :title="$t('api-test.definition')" :style="{ width: '100%' }">
          <UrlRequestBar />
          <QueryContent />
          <ResponseContent />
        </a-card>
      </a-col>
    </a-row>
  </a-form>
</template>

<script setup>
  import { provide, reactive } from 'vue';
  import UrlRequestBar from '@/views/api-test/definition/components/url-request-bar.vue';
  import QueryContent from '@/views/api-test/definition/components/query-content.vue';
  import ResponseContent from '@/views/api-test/definition/components/response-content.vue';
  import BaseContent from '@/views/api-test/definition/components/base-content.vue';

  const apiForm = reactive({
    name: '',
    owner: '',
    module: '',
    status: '',
  });
  provide('apiForm', apiForm);
</script>

<style scoped></style>
