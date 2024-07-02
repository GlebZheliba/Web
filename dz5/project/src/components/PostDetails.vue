<template>
    <div>
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null
      }
    },
    mounted() {
      this.fetchPost();
    },
    methods: {
      fetchPost() {
        const postId = this.$route.params.id;
        axios.get(`http://localhost:5180/api/Posts/${postId}`) 
          .then(response => {
            this.post = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>