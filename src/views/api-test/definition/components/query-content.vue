<template>
  <a-card
    :title="$t('api-test.definition.query')"
    :style="{ marginBottom: '20px' }"
  >
    <a-tabs default-active-key="Headers" lazy-load>
      <a-tab-pane key="Params">
        <template #title>
          {{ $t('api-test.definition.Params') }}
        </template>
        <div v-for="(row, index) in rows" :key="row.id">
          <dynamic-row>
            <icon-arrow-up />
            <icon-arrow-down />
            <a-input></a-input>
            <a-select></a-select>
            <a-input></a-input>
            <a-textarea auto-size></a-textarea>
            <a-button>
              <template #icon>
                <icon-settings />
              </template>
            </a-button>
            <a-button @click="removeRow(index)" :disabled="rows.length <= 1">
              <template #icon>
                <icon-delete />
              </template>
            </a-button>
            <a-button v-if="showPlusIcon && index === 0" @click="addRow"
              ><template #icon><icon-plus /></template
            ></a-button>
          </dynamic-row>
        </div>
      </a-tab-pane>
      <a-tab-pane key="Headers">
        <template #title>
          {{ $t('api-test.definition.Headers') }}
        </template>
      </a-tab-pane>
      <a-tab-pane>
        <template #title>
          {{ $t('api-test.definition.Body') }}
        </template>
        <a-tabs>
          <a-tab-pane key="form-data">
            <template #title>form-data</template>
            <a-row>
              <a-col :span="23" :offset="1">
                <a-space>
                  <a-input-group>
                    <a-select></a-select>
                    <a-input></a-input>
                  </a-input-group>
                  <a-select></a-select>
                  <a-input></a-input>
                  <a-input></a-input>
                </a-space>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="x-www-form-urlencoded">
            <template #title>x-www-form-urlencoded</template>
          </a-tab-pane>
          <a-tab-pane key="json">
            <template #title>json</template>
          </a-tab-pane>
          <a-tab-pane key="xml">
            <template #title>xml</template>
          </a-tab-pane>
          <a-tab-pane key="raw">
            <template #title>raw</template>
          </a-tab-pane>
          <a-tab-pane key="binary">
            <template #title>binary</template>
          </a-tab-pane>
        </a-tabs>
      </a-tab-pane>
      <a-tab-pane key="Authorization">
        <template #title>
          {{ $t('api-test.definition.Authorization') }}
        </template>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script lang="ts">
  import { defineComponent, reactive, onMounted } from 'vue';
  import DynamicRow from '@/views/api-test/definition/components/dynamic-row.vue';

  interface Row {
    id: number;
  }

  export default defineComponent({
    components: {
      DynamicRow,
    },
    setup() {
      const rows = reactive<Row[]>([]);
      let showPlusIcon = true;

      const addRow = () => {
        rows.push({ id: Date.now() });
        showPlusIcon = false;
      };
      const removeRow = (index: number) => {
        rows.splice(index, 1);
      };
      onMounted(() => {
        addRow();
      });
      return {
        rows,
        addRow,
        removeRow,
        showPlusIcon,
      };
    },
  });
</script>

<style scoped></style>
