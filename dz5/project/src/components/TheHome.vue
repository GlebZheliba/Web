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
  mounted() {
    this.fetchPosts();
  },
  methods: {
    fetchPosts() {
      axios.get('http://localhost:5180/api/Posts')
        .then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    }
  },
  components: {
    PostCard
  }
};
</script>