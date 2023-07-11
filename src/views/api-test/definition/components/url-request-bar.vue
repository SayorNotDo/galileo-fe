<template>
  <a-form-item
    :label="$t('api-test.definition.url')"
    :rules="[
      {
        required: true,
        message: $t('api-test.definition.url.required'),
      },
    ]"
  >
    <a-row :gutter="2" :style="{ width: '100%' }">
      <a-col :span="3">
        <a-form-item field="request.method" no-style>
          <a-select default-value="POST">
            <a-option value="POST">POST</a-option>
            <a-option value="GET">GET</a-option>
            <a-option value="PUT">PUT</a-option>
            <a-option value="DELETE">DELETE</a-option>
          </a-select>
        </a-form-item>
      </a-col>
      <a-col :span="16">
        <a-form-item field="request.url" no-style>
          <a-input></a-input>
        </a-form-item>
      </a-col>
      <a-col :span="5">
        <a-button type="outline">
          <template #icon><icon-send /></template>
          {{ $t('api-test.definition.send') }}
        </a-button></a-col
      ></a-row
    ></a-form-item
  >
</template>

<script>
  export default {
    name: 'url-request-bar',
  };
</script>

<style scoped></style>
