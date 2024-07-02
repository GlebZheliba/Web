<template>
    <div>
      <h1>Создать пост</h1>
      <form @submit.prevent="createPost">
        <div>
          <label for="title">Название:</label>
          <input type="text" id="title" v-model="newPost.title">
        </div>
        <div>
          <label for="content">Содержание:</label>
          <textarea id="content" v-model="newPost.content"></textarea>
        </div>
        <button type="submit">Создать</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newPost: {
          title: '',
          content: ''
        }
      }
    },
    methods: {
      createPost() {
        axios.post(`http://localhost:5180/api/Posts`, this.newPost) 
          .then(response => {
            const postId = response.data.id; 
            this.$router.push(`/posts/${postId}`); 
          })
          .catch(error => {
            console.error(error);
          });
      }
    }
  };
  </script>