<template>
  <div>
    <h1>{{ title }}</h1>
    <form @submit.prevent>
      <div>
        <label for="name">お名前</label>
        <input id="name" v-model="data.form.name" type="text" />
      </div>
      <div>
        <label for="email">email</label>
        <input
          id="email"
          ref="emailInput"
          v-model="data.form.email"
          type="text"
        />
      </div>
      <div>
        <button @click="addUser">ユーザー追加</button>
      </div>
    </form>
    <div style="margin-top: 16px">
      <p>ユーザー件数: {{ userNum }}</p>
      <ul>
        <li v-for="user in data.users" :key="user.id">
          {{ user.id }}:{{ user.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = reactive({
      form: { name: '', email: '' },
      users: [],
    });

    const emailInput = ref(null);

    const title = ref('タイトル');

    const userNum = computed(() => data.users.length);

    const addUser = () => {
      const id = Math.max(...data.users.map((user) => user.id)) + 1;
      data.users.push({ id, name: data.form.name });
      data.form.name = '';
    };

    watch(
      () => data.form.name,
      (currentName, prevName) => {
        console.info(`currentName: ${currentName}, prevName: ${prevName}`);
      }
    );

    // created ... DOMにさわれることが保証されてない。APIからデータ取得する処理などを書く
    setTimeout(() => {
      data.users.push(
        ...[
          { id: 1, name: '山田太郎' },
          { id: 2, name: '田中浩一' },
          { id: 3, name: '鈴木花子' },
        ]
      );
    }, 3000);

    onMounted(() => {
      emailInput.value.focus();
    });

    return { data, title, userNum, addUser, emailInput };
  },
});
</script>

<style></style>
