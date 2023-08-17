<template>
  <a-row>
    <a-col :span="8" :offset="1">
      <a-space>
        <a-button>
          <template #icon><icon-edit /></template>
        </a-button>
      </a-space>
    </a-col>
    <a-col :span="8" :offset="8"> </a-col>
  </a-row>
</template>

<script>
  export default {
    name: 'toolbar',
  };
</script>

<style scoped></style>
