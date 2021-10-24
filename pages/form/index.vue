<template>
  <div>
    <div>
      {{ form }}
    </div>
    <div class="form-wrapper">
      <MyInput v-model="form.text" class="form" />
      <MyTextArea v-model="form.longText" class="form" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import MyInput from './-MyInput.vue';
import MyTextArea from './-MyTextArea.vue';

interface State {
  text: string;
  longText: string;
  checked: boolean;
  picked: string;
  selected: string;
}

export default defineComponent({
  components: { MyInput, MyTextArea },
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

<style scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
}
.form {
  border: solid 1px;
  margin: 8px 0;
}
</style>
