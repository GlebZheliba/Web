<template>
    <div class="create-post-container">
      <h1>Создать пост</h1>
      <form @submit.prevent="createPost" class="create-post-form">
        <div class="form-group">
          <label for="title">Название:</label>
          <input type="text" id="title" v-model="newPost.Title" class="form-control">
        </div>
        <div class="form-group">
          <label for="content">Содержание:</label>
          <textarea id="content" v-model="newPost.Body" class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Создать</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        newPost: {
          Title: '',
          Body: '',
          UserId: 0 
        }
      }
    },
    methods: {
      async createPost() {
        try {
          const response = await axios.post('http://localhost:5180/api/Posts', this.newPost);
          const postId = response.data.id;
          this.$router.push(`/posts/${postId}`);
        } catch (error) {
          console.error(error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .create-post-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .create-post-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  .form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    box-sizing: border-box;
  }
  
  textarea.form-control {
    height: 100px;
    resize: vertical;
  }
  
  .btn-primary {
    background-color: #007bff; 
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>