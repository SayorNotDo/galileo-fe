<template>
  <div class="container">
    <a-row :gutter="10" :style="{ marginBottom: '5px', width: '100%' }">
      <a-col :span="4" :offset="20">
        <a-button type="outline" :style="{ marginRight: '8px' }">
          <template #icon>
            <icon-tool />
          </template>
          连接
        </a-button>
        <a-button type="outline">
          <template #icon>
            <icon-play-circle-fill />
          </template>
          调试
        </a-button>
      </a-col>
    </a-row>
    <a-grid :col="24" :col-gap="16" :style="{ marginBottom: '16px' }">
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <a-card :title="$t('test-track.case.editfield')" size="small">
          <a-textarea
            placeholder=""
            :auto-size="{ minRows: 16, maxRows: 16 }"
            allow-clear
          ></a-textarea>
        </a-card>
      </a-grid-item>
      <a-grid-item :span="{ xs: 24, sm: 24, md: 24, lg: 12, xl: 12, xxl: 12 }">
        <a-card
          :title="$t('test-track.case.template')"
          size="small"
          :style="{ height: '100%' }"
          :hoverable="true"
        >
          <TemplateTree />
        </a-card>
      </a-grid-item>
    </a-grid>
    <a-row>
      <a-col flex="auto">
        <a-card
          :title="$t('test-track.debug.console')"
          size="small"
          :hoverable="true"
        >
          <Console />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
  import TemplateTree from '@/views/test-track/debug/components/template-tree.vue';
  import Console from '@/views/test-track/debug/components/console.vue';
  export default {
    name: 'Debug',
    components: { Console, TemplateTree },
  };
</script>

<style scoped>
  .container {
    background-color: var(--color-fill-2);
    padding: 5px 20px 0;
  }
</style>
