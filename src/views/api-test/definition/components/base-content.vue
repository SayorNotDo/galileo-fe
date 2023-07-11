<template>
  <a-card
    :title="$t('api-test.base-info')"
    :bordered="false"
    :style="{ width: '100%' }"
  >
    <template #extra>
      <a-button type="outline">
        <template #icon><icon-save /></template>
        保存</a-button
      >
    </template>
    <a-row :gutter="10">
      <a-col :span="12">
        <a-form-item
          field="name"
          :label="$t('api-test.definition.name')"
          :rules="[
            {
              required: true,
              message: $t('api-test.definition.name.required'),
            },
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input></a-input>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item
          field="owner"
          :label="$t('api-test.definition.owner')"
          :rules="[
            {
              required: true,
              message: $t('api-test.definition.owner.required'),
            },
          ]"
        >
          <a-select v-model="apiForm.owner"></a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="10">
      <a-col :span="12">
        <a-form-item
          field="module"
          :label="$t('api-test.definition.module')"
          :rules="[
            {
              required: true,
              message: $t('api-test.definition.module.required'),
            },
          ]"
        >
          <a-select v-model="apiForm.status"></a-select>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item
          field="status"
          :label="$t('api-test.definition.status')"
          :rules="[
            {
              required: true,
              message: $t('api-test.definition.status.required'),
            },
          ]"
        >
          <a-select v-model="apiForm.module"></a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <a-form-item field="labels" :label="$t('api-test.definition.labels')">
          <a-input></a-input>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item
          field="description"
          :label="$t('api-test.definition.description')"
        >
          <a-textarea auto-size></a-textarea>
        </a-form-item>
      </a-col>
    </a-row>
  </a-card>
</template>

<script setup>
  import { inject } from 'vue';

  const apiForm = inject('apiForm');
</script>

<style scoped></style>
