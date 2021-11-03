<template>
  <div class="pt-10">
    <v-img
      :src="img"
      min-height="300"
      max-width="300"
      height="500"
      width="500"
      class="mx-auto"
    ></v-img>
    <v-spacer></v-spacer>
    <p class="text-h5 text-center bold">ゆっくりしてってや。</p>
  </div>
</template>

<script>
import { defineComponent, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const img = ref(require('../assets/images/topImage.jpg'));

    return { img };
  },
});
</script>
