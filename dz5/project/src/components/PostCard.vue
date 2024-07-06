<template>
    <div class="post-card">
      <router-link :to="`/posts/${post.Id}`">
        <h2 class="post-title">{{ post.Title }}</h2>
        <p class="post-body">{{ post.Body}}</p>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostCard',
    props: ['post']
  };
  </script>
  
  <style scoped>
  .post-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  }
  
  .post-title {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #333;
  }
  
  .post-body {
    color: #555;
    line-height: 1.6;
  }
  
  .post-card a {
    text-decoration: none; 
    color: #333; 
  }
  
  .post-card a:hover {
    text-decoration: underline; 
  }
  </style>