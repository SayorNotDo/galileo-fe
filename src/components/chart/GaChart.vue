<template>
  <chart />
</template>

<script lang="ts">
  export default {
    name: 'GaChart',
    props: Object,
    theme: [String, Object],
    initOption: {
      type: Object,
      default() {
        return {
          renderer: 'canvas',
        };
      },
    },
  };
</script>

<style scoped></style>
