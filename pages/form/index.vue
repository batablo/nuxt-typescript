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

    <section class="container">
      <div>
        <h2>Write to Firestore.</h2>
        <div>
          <button @click="writeToFirestore">
            <span>Write now</span>
          </button>
        </div>
        <h2>Read from Firestore.</h2>
        <div>
          <button @click="readFromFirestore">
            <span> Read now </span>
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@nuxtjs/composition-api';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import MyCheckbox from './-MyCheckbox.vue';
import MyInput from './-MyInput.vue';
import MyRadio from './-MyRadio.vue';
import MySelect from './-MySelect.vue';
import MyTextArea from './-MyTextArea.vue';
import { db } from '~/plugins/firebase';

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

    const writeToFirestore = async () => {
      const ref = doc(db, 'testCollection', 'testDoc');
      const document = {
        text: 'Firebase 9 rocks!',
      };
      try {
        await setDoc(ref, document);
        alert('Success!');
      } catch (e) {
        alert('Error!');
        console.error(e);
      }
    };

    const readFromFirestore = async () => {
      const ref = doc(db, 'testCollection', 'testDoc');
      try {
        const document = await getDoc(ref);
        alert(document.data()?.text);
      } catch (e) {
        alert('Error!');
        console.error(e);
      }
    };

    return { form, options, writeToFirestore, readFromFirestore };
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
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
