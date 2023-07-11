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
            <div class="circle"
              ><a-statistic
                :value="273"
                :value-from="0"
                animation
                show-group-separator
                class="centered-value"
              >
                <template #suffix>
                  <icon-arrow-rise />
                </template>
              </a-statistic>
            </div>
          </a-space>
        </a-grid-item>
        <a-grid-item
          class="panel-col"
          :span="{ xs: 4, sm: 4, md: 4, lg: 4, xl: 4, xxl: 2 }"
        >
          <div v-for="row in rows">
            <div class="statistic-container">
              <div class="color-block"></div>
              <div class="title">{{ row.title }}</div>
              <div class="value">{{ row.value }}</div>
            </div>
          </div>
          <!--          <div class="statistic-container">-->
          <!--            <div class="color-block"></div>-->
          <!--            <div class="title">HTTP</div>-->
          <!--            <div class="value">123</div> </div-->
          <!--          ><div class="statistic-container">-->
          <!--            <div class="title">SQL</div>-->
          <!--            <div class="value">123</div> </div-->
          <!--          ><div class="statistic-container">-->
          <!--            <div class="title">RPC</div>-->
          <!--            <div class="value">123</div> </div-->
          <!--          ><div class="statistic-container">-->
          <!--            <div class="title">TCP</div>-->
          <!--            <div class="value">123</div>-->
          <!--          </div>-->
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
  import { reactive } from 'vue';
  const { loading } = useLoading();
  interface Row {
    id: number;
    title: string;
    value: number;
  }

  const rows = reactive<Row[]>([]);
</script>

<style lang="less" scoped>
  .statistic-container {
    position: relative;
    display: flex;
    padding-left: 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .color-block {
    position: absolute;
    left: 0;
    width: 16px;
    height: 100%;
    background-color: #ff0000;
  }

  .circle {
    position: relative;
    width: 120px;
    height: 120px;
    border: 9px solid #b391e8;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
