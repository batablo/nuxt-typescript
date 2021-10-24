<template>
  <div>
    <div>
      {{ form }}
    </div>
    <MyInput v-model="form.text" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import MyInput from './-MyInput.vue';

interface State {
  text: string;
  longText: string;
  checked: boolean;
  picked: string;
  selected: string;
}

export default defineComponent({
  components: { MyInput },
  setup() {
    const form = reactive<State>({
      text: 'init text',
      longText: 'init long text',
      checked: false,
      picked: 'two',
      selected: 'b',
    });

    const options = [
      { label: 'A', value: 'a' },
      { label: 'B', value: 'b' },
      { label: 'C', value: 'c' },
    ];

    return { form, options };
  },
});
</script>
