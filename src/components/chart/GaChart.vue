<template>
  <chart
    v-if="loaded"
    :style="{ height: chartHeight, width: chartWidth }"
    class=""
    :init-option="defaultInitOptions"
    :option="options"
  />
</template>

<script>
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
    group: String,
    autoresize: Boolean,
    watchShallow: Boolean,
    manualUpdate: Boolean,
    height: {
      type: [Number, String],
      default() {
        return 400;
      },
      width: [Number, String],
    },
    data() {
      return {
        loaded: true,
        defaultInitOptions: this.initOptions,
      };
    },
    computed: {
      chartHeight() {
        if (this.height.indexOf) {
          return this.height;
        } else {
          return this.height + 'px';
        }
      },
      chartWidth() {
        if (!this.width) {
          return this.width;
        }
        if (this.width.indexOf) {
          return this.width;
        } else {
          return this.width + 'px';
        }
      },
    },
    mounted() {},
    methods: {},
  };
</script>

<style scoped></style>
