<template>
  <div>
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="u in data.users" :key="u.id">{{ u.id }}{{ u.name }}</li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: '山田太郎' },
        { id: 2, name: '田中浩一' },
        { id: 3, name: '鈴木花子' },
      ],
    });

    const title = ref('タイトル');

    setTimeout(() => {
      data.users.push({ id: 4, name: 'ジョンソン' });
      title.value = 'タイトルが変更できる';
    }, 5000);

    return { data, title };
  },
});
</script>

<style></style>
