<template>
    <div class="post-card">
      <router-link :to="`/posts/${post.id}`">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content.slice(0, 100) }}...</p>
      </router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PostCard',
    props: ['post']
  };
  </script>