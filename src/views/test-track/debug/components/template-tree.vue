<template>
  <a-tree :data="treeData"></a-tree>
</template>

<script>
  export default {
    name: 'template-tree',
    data() {
      return {
        treeData,
      };
    },
  };
  const treeData = [];
</script>

<style scoped></style>
