<template>
  <label>
    <input type="checkbox" :checked="checked" @change="changeHandler" />
    <slot></slot>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['change'],
  setup(_, context) {
    const changeHandler = (e: Event) => {
      const target = e.target as HTMLInputElement;
      context.emit('change', target.checked);
    };

    return { changeHandler };
  },
});
</script>
