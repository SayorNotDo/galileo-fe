<template>
  <a-form
    :model="apiForm"
    :style="{ padding: '16px 20px 0 20px' }"
    auto-label-width
  >
    <a-row :gutter="10" :style="{ marginBottom: '16px' }">
      <a-col>
        <a-card
          :title="$t('api-test.base-info')"
          :bordered="false"
          :style="{ width: '100%' }"
        >
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
              <a-form-item
                field="labels"
                :label="$t('api-test.definition.labels')"
              >
                <a-input></a-input>
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                field="description"
                :label="$t('api-test.definition.description')"
              >
                <a-textarea></a-textarea>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
    <a-row>
      <a-col>
        <a-card :title="$t('api-test.definition')" :style="{ width: '100%' }">
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
          <a-card
            :title="$t('api-test.definition.query')"
            :style="{ marginBottom: '20px' }"
          >
            <a-tabs default-active-key="Headers" lazy-load>
              <a-tab-pane key="Params">
                <template #title>
                  {{ $t('api-test.definition.Params') }}
                </template>
              </a-tab-pane>
              <a-tab-pane key="Headers">
                <template #title>
                  {{ $t('api-test.definition.Headers') }}
                </template>
              </a-tab-pane>
              <a-tab-pane key="Authorization">
                <template #title>
                  {{ $t('api-test.definition.Authorization') }}
                </template>
              </a-tab-pane>

              <a-tab-pane>
                <template #title>
                  {{ $t('api-test.definition.Body') }}
                </template>
              </a-tab-pane>
            </a-tabs>
          </a-card>
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
          </a-card>
        </a-card>
      </a-col>
    </a-row>
  </a-form>
</template>

<script setup>
  import { reactive } from 'vue';
  import { margin } from 'stylelint-order/rules/shorthandData';

  const apiForm = reactive({
    name: '',
    owner: '',
    module: '',
    status: '',
  });
</script>

<style scoped></style>
