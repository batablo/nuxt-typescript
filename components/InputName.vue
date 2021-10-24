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
    // inputタグ内で直接書くなら、`$emit('input', $event.target.value)`
    const inputHandler = (e) => {
      context.emit('input', e.target.value);

      // setupの第二引数を{emit}にした場合
      // emit('input', e.target.value);
    };

    return { inputHandler };
  },
});
</script>
