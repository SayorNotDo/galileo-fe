<template>
  <a-spin :loading="loading" style="width: 100%">
    <a-card
      class="general-card"
      :header-style="{ paddingBottom: '0' }"
      :body-style="{
        padding: '20px',
      }"
    >
      <template #title>
        {{ $t('workplace.categoriesPercent') }}
      </template>
      <Chart height="310px" :option="chartOption" />
    </a-card>
  </a-spin>
</template>

<script lang="ts" setup>
  import useLoading from '@/hooks/loading';
  import useChartOption from '@/hooks/chart-option';
  import * as echarts from 'echarts/core';
  import { PieChart } from 'echarts/charts';
  import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
  } from 'echarts/components';
  import { LabelLayout, UniversalTransition } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';

  echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    PieChart,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
  ]);
  const { loading } = useLoading();
  const { chartOption } = useChartOption((isDark) => {
    // echarts support https://echarts.apache.org/zh/theme-builder.html
    // It's not used here
    return {
      series: [
        {
          stillShowZeroSum: false,
          type: 'pie',
          itemStyle: {
            borderColor: isDark ? '#232324' : '#fff',
            borderWidth: 1,
          },
          data: [
            {
              value: 335,
              name: '直接访问',
            },
            {
              value: 234,
              name: '联盟广告',
            },
            {
              value: 1548,
              name: '搜索引擎',
            },
          ],
          roseType: 'area',
        },
      ],

      // legend: {
      //   left: 'center',
      //   data: ['纯文本', '图文类', '视频类'],
      //   bottom: 0,
      //   icon: 'circle',
      //   itemWidth: 8,
      //   textStyle: {
      //     color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
      //   },
      //   itemStyle: {
      //     borderWidth: 0,
      //   },
      // },
      // tooltip: {
      //   show: true,
      //   trigger: 'item',
      // },
      // graphic: {
      //   elements: [
      //     {
      //       type: 'text',
      //       left: 'center',
      //       top: '40%',
      //       style: {
      //         text: '内容量',
      //         textAlign: 'center',
      //         fill: isDark ? '#ffffffb3' : '#4E5969',
      //         fontSize: 14,
      //       },
      //     },
      //     {
      //       type: 'text',
      //       left: 'center',
      //       top: '50%',
      //       style: {
      //         text: '928,531',
      //         textAlign: 'center',
      //         fill: isDark ? '#ffffffb3' : '#1D2129',
      //         fontSize: 16,
      //         fontWeight: 500,
      //       },
      //     },
      //   ],
      // },
      // series: [
      //   {
      //     type: 'pie',
      //     radius: ['50%', '70%'],
      //     center: ['50%', '50%'],
      //     label: {
      //       formatter: '{d}%',
      //       fontSize: 14,
      //       color: isDark ? 'rgba(255, 255, 255, 0.7)' : '#4E5969',
      //     },
      //     itemStyle: {
      //       borderColor: isDark ? '#232324' : '#fff',
      //       borderWidth: 1,
      //     },
      //     data: [
      //       {
      //         value: [148564],
      //         name: '纯文本',
      //         itemStyle: {
      //           color: isDark ? '#3D72F6' : '#249EFF',
      //         },
      //       },
      //       {
      //         value: [334271],
      //         name: '图文类',
      //         itemStyle: {
      //           color: isDark ? '#A079DC' : '#313CA9',
      //         },
      //       },
      //       {
      //         value: [445694],
      //         name: '视频类',
      //         itemStyle: {
      //           color: isDark ? '#6CAAF5' : '#21CCFF',
      //         },
      //       },
      //     ],
      //   },
      // ],
    };
  });
</script>

<style scoped lang="less"></style>
