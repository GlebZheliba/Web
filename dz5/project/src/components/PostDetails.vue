<template>
    <div>
      <div v-if="post">
        <h2>{{ post.Title }}</h2>
        <p>{{ post.Body }}</p>
      </div>
      <router-link to="/" class="return-link">Назад</router-link>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "PostDetails",
    data() {
      return {
        post: null,
      };
    },
    async created() {
      try {
        const response = await axios.get(`http://localhost:5180/api/Posts/${this.$route.params.id}`);
        this.post = response.data;
      } catch (error) {
        alert(error);
      }
    },
  };
  </script>
  
  <style scoped>
  .return-link {
    margin-top: 20px;
    margin-left: 50%;
  }
  </style>