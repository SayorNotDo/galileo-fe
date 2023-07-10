<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{ padding: '17px 20px 21px 20px' }"
    >
      <template #title>
        {{ $t('dashboard.apiCount') }}
      </template>
      <a-grid :cols="12" :row-gap="8" class="panel">
        <a-grid-item
          class="panel-col"
          :span="{ xs: 8, sm: 8, md: 8, lg: 8, xl: 8, xxl: 4 }"
        >
          <a-space>
            <a-statistic
              :value="273"
              :value-from="0"
              animation
              show-group-separator
            ></a-statistic>
          </a-space>
        </a-grid-item>
        <a-grid-item
          class="panel-col"
          :span="{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 2 }"
        >
          <a-space direction="vertical">
            <a-statistic title="HTTP" :value="123" show-group-separator>
              <template #prefix></template>
            </a-statistic>
            <a-statistic title="RPC" :value="231" show-group-separator />
            <a-statistic title="TCP" :value="21" show-group-separator />
            <a-statistic title="SQL" :value="32" show-group-separator />
          </a-space>
        </a-grid-item>
        <a-grid-item
          class="panel-col"
          :span="{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 3 }"
        ></a-grid-item>
        <a-grid-item
          class="panel-col"
          :span="{ xs: 6, sm: 6, md: 6, lg: 6, xl: 6, xxl: 3 }"
        ></a-grid-item>
      </a-grid>
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import useLoading from '@/hooks/loading';
  const { loading } = useLoading();
</script>

<style lang="less" scoped></style>
