<template>
  <div>
    <label for="name">お名前</label>
    <input id="name" :value="value" type="text" @input="inputHandler" />
  </div>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  setup(_, context) {
    // inputタグ内で直接書くなら、`$emit('update:value', $event.target.value)`
    const inputHandler = (e) => {
      context.emit('update:value', e.target.value);

      // setupの第二引数を{emit}にした場合
      // emit('update:value', e.target.value);
    };

    return { inputHandler };
  },
});
</script>
