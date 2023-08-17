<template>
  <div class="container">
    <a-card>
      <a-space direction="vertical" :size="10" fill>
        <a-space>
          <a-select
            :style="{ width: '160px' }"
            placeholder=""
            multiple
          ></a-select>
          <a-select
            :style="{ width: '160px' }"
            placeholder=""
            multiple
          ></a-select>
          <a-input-search
            :style="{ width: '200px' }"
            placeholder=""
          ></a-input-search>
        </a-space>
        <a-table
          :data="renderList"
          :pagination="false"
          :bordered="false"
          :scroll="{ x: '100%', y: '264px' }"
        >
          <template #columns>
            <a-table-column title="事件名" data-index="name"></a-table-column>
            <a-table-column
              title="显示名"
              data-index="displayName"
            ></a-table-column>
            <a-table-column title="描述" data-index="description">
            </a-table-column>
            <a-table-column title="类型" data-index="category"></a-table-column>
          </template>
        </a-table>
      </a-space>
    </a-card> </div
></template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import useLoading from '@/hooks/loading';
  import { TableData } from '@arco-design/web-vue/es/table/interface';

  const type = ref('common');
  const { loading, setLoading } = useLoading();
  const renderList = ref<TableData[]>();

  const fetchData = async (contentType: string) => {
    try {
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };

  const typeChange = (contentType: string) => {
    fetchData(contentType);
  };
  fetchData('common');
</script>

<style scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 16px 20px 0;
  }
</style>
