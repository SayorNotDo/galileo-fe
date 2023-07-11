<template>
  <a-card :title="$t('api-test.definition.response')">
    <a-tabs default-active-key="responseHeaders" lazy-load>
      <a-tab-pane key="responseHeaders">
        <template #title>
          {{ $t('api-test.definition.responseHeaders') }}
        </template>
      </a-tab-pane>
      <a-tab-pane key="responseBody">
        <template #title>
          {{ $t('api-test.definition.responseBody') }}
        </template>
      </a-tab-pane>
      <a-tab-pane key="responseCode">
        <template #title>
          {{ $t('api-test.definition.responseCode') }}
        </template>
      </a-tab-pane>
    </a-tabs>
  </a-card></template
>

<script>
  export default {
    name: 'response-content',
  };
</script>

<style scoped></style>
