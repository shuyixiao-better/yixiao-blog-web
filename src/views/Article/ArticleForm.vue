<script>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
  props: ['id'],
  setup(props) {
    const article = ref({
      title: '',
      content: '',
    });
    const isEditMode = ref(false);
    const route = useRoute();
    const router = useRouter();

    onMounted(async () => {
      if (props.id) {
        isEditMode.value = true;
        const response = await fetch('/api/articles/' + props.id);
        article.value = await response.json();
      }
    });

    const submitForm = async () => {
      const method = isEditMode.value ? 'PUT' : 'POST';
      const url = isEditMode.value
          ? '/api/articles/' + props.id
          : '/api/articles';
      await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(article.value),
      });
      router.push('/');
    };

    return {
      article,
      isEditMode,
      submitForm,
    };
  },
};
</script>

<template>
  <div>
    <h1>{{ isEditMode ? 'Edit Article' : 'Create New Article' }}</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="article.title" required />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea v-model="article.content" required></textarea>
      </div>
      <button type="submit">{{ isEditMode ? 'Update' : 'Create' }}</button>
    </form>
  </div>
</template>


