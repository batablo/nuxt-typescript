<template>
  <div>
    <form @submit.prevent>
      <InputName v-model="data.form.name" />
    </form>
    <UserList :users="data.users" />
  </div>
</template>

<script>
import { defineComponent, reactive } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const data = reactive({
      users: [
        { id: 1, name: '加藤かな' },
        { id: 2, name: '田中紘一' },
        { id: 3, name: '山田太郎' },
      ],
      form: {
        name: '山田',
      },
    });

    setTimeout(() => {
      data.users.push({ id: 4, name: '木下武' });
    }, 3000);

    return { data };
  },
});
</script>
