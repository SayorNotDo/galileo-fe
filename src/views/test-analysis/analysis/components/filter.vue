<template>
  <div>
    <a-range-picker
      show-time
      :time-picker-props="{
        defaultValue: ['00:00:00', '00:00:00'],
      }"
      @change="onChange"
      @select="onSelect"
      style="width: 380px"
    ></a-range-picker
    ><a-button type="outline" :style="{ marginLeft: '5px' }">VS</a-button>
  </div>
</template>

<script>
  export default {
    name: 'filter',
    setup() {
      function onSelect(dataString, date) {
        console.log('onSelect: ' + dataString, date);
      }

      function onChange(dataString, date) {
        console.log('onChange: ' + dataString, date);
      }

      return {
        onSelect,
        onChange,
      };
    },
  };
</script>

<style scoped></style>
