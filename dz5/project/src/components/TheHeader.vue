<template>
  <header class="header">
    <div class="container">
      <router-link to="/" class="nav-link">Главная</router-link>
      <router-link to="/create" class="nav-link">Создать пост</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>
.header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center; 
}

.container {
  display: flex;
  justify-content: center; 
  gap: 20px; 
}

.nav-link {
  text-decoration: none;
  color: #333;
  padding: 10px 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-link:hover {
  background-color: #ddd;
}
</style>