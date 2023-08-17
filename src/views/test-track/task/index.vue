<template>
  <div class="container">
    <a-card>
      <a-space direction="vertical" :size="10" fill>
        <a-radio-group
          v-model:model-value="type"
          type="button"
          @change="typeChange as any"
        >
          <a-radio value="common">
            {{ $t('test-track.task.common') }}
          </a-radio>
          <a-radio value="cron">
            {{ $t('test-track.task.cron') }}
          </a-radio>
          <a-radio value="delay">
            {{ $t('test-track.task.delay') }}
          </a-radio>
        </a-radio-group>
        <a-table
          :data="renderList"
          :pagination="false"
          :bordered="false"
          :scroll="{ x: '100%', y: '264px' }"
        >
          <template #columns>
            <a-table-column title="任务名" data-index="name"></a-table-column>
            <a-table-column title="状态" data-index="status"></a-table-column>
            <a-table-column
              title="创建时间"
              data-index="createdAt"
              :sortable="{
                sortDirections: ['ascend', 'descend'],
              }"
            >
            </a-table-column>
            <a-table-column title="任务进度" data-index="progress">
              <template #cell="{ record }">
                <div class="increases-cell">
                  <span>{{ record.progress }}%</span>
                  <icon-caret-up
                    v-if="record.increases !== 0"
                    style="color: #f53f3f; font-size: 8px"
                  />
                </div>
              </template>
            </a-table-column>
            <a-table-column
              title="执行机"
              data-index="executeMachine"
            ></a-table-column>
            <a-table-column
              title="操作"
              data-index="operation"
            ></a-table-column>
          </template>
        </a-table>
      </a-space>
    </a-card>
  </div>
</template>

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
