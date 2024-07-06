<template>
  <div>
    <h1>Все посты</h1>
    <ul>
      <PostCard v-for="post in posts" :key="post.id" :post="post" />
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import PostCard from '../components/PostCard.vue';

export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      const response = await axios.get('http://localhost:5180/api/Posts')
          console.log(response.data)
          this.posts = response.data;
    }
  },
  components: {
    PostCard
  }
};
</script>