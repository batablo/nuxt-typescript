<template>
  <textarea type="text" @input="ipnutHandler" />
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
    const ipnutHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      context.emit('input', target.value);
    };

    return { ipnutHandler };
  },
});
</script>
