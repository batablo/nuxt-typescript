<template>
  <input type="text" :value="value" @input="inputHandler" />
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
  },
  emits: ['input'],
  setup(_, context) {
    const inputHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      context.emit('input', target.value);
    };

    return { inputHandler };
  },
});
</script>
