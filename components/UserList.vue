<template>
  <div>
    <p>ユーザー件数: {{ userNum }}</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }}: {{ user.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api';

export default defineComponent({
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const userNum = computed(() => props.users.length);

    return { userNum };
  },
});
</script>
