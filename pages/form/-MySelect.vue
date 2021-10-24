<template>
  <select @change="changeHandler">
    <option
      v-for="(option, index) in options"
      :key="index"
      :value="option.value"
      :selected="value === option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, PropType } from '@nuxtjs/composition-api';

interface Option {
  label: string | number;
  value: string | number;
}

export default defineComponent({
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    options: {
      type: Array as PropType<Option[]>,
      default: () => [],
    },
  },
  emits: ['change'],
  setup(_, context) {
    const changeHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      context.emit('change', target.value);
    };

    return { changeHandler };
  },
});
</script>
