<template>
  <div>
    <div>
      {{ form }}
    </div>
    <div class="form-wrapper">
      <MyInput v-model="form.text" class="form-border" />
      <MyTextArea v-model="form.longText" class="form-border" />
      <MyCheckbox v-model="form.checked">check</MyCheckbox>
      <div>
        <MyRadio v-model="form.picked" label="one">One</MyRadio>
        <MyRadio v-model="form.picked" label="two">Two</MyRadio>
      </div>
      <MySelect v-model="form.selected" :options="options" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import MyCheckbox from './-MyCheckbox.vue';
import MyInput from './-MyInput.vue';
import MyRadio from './-MyRadio.vue';
import MySelect from './-MySelect.vue';
import MyTextArea from './-MyTextArea.vue';

interface State {
  text: string;
  longText: string;
  checked: boolean;
  picked: string;
  selected: string;
}

export default defineComponent({
  components: { MyInput, MyTextArea, MyCheckbox, MyRadio, MySelect },
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
.form-border {
  border: solid 1px;
  margin: 8px 0;
}
</style>
