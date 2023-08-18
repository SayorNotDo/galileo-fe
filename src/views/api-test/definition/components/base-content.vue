<template>
  <a-card
    :title="$t('api-test.base-info')"
    :bordered="false"
    :style="{ width: '100%' }"
  >
    <template #extra>
      <a-button type="outline">
        <template #icon>
          <icon-save />
        </template>
        保存
      </a-button>
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
          <a-select v-model="apiForm.owner">
            <a-option v-for="user in userList" :value="user.id">
              {{ user.chineseName }}
            </a-option>
          </a-select>
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

<script lang="ts" setup>
  import { inject, reactive, ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { getUserList } from '@/api/user';
  import { UserInfo } from '@/api/user';
  import User from '@/store/modules/user';

  const { setLoading } = useLoading();

  const apiForm = inject('apiForm');

  const userList = ref([]);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await getUserList();
      console.log(response);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  fetchData();
</script>

<style scoped></style>
