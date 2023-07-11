<template>
  <a-row :style="{ marginTop: '10px' }">
    <a-col :span="23" :offset="1">
      <a-space>
        <slot></slot>
      </a-space>
    </a-col>
  </a-row>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import {
    Row as ARow,
    Col as ACol,
    Space as ASpace,
  } from '@arco-design/web-vue';

  export default defineComponent({
    components: {
      ARow,
      ACol,
      ASpace,
    },
  });
</script>

<style scoped></style>
