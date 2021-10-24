<template>
  <label>
    <input
      type="radio"
      :value="label"
      :checked="label === value"
      @change="changeHandler"
    />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  model: {
    event: 'change',
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: '',
    },
    label: {
      type: [Boolean, String, Number],
      default: '',
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
