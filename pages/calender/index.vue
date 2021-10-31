<template>
  <v-sheet height="500">
    <h2>カレンダー</h2>
    <Calender />
  </v-sheet>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api';
import Calender from './-Calender.vue';

export default defineComponent({
  components: { Calender },
  setup() {},
});
</script>
