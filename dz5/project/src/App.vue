<template>
  <div id="app">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
 import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    TheHeader
  }
};
</script>

<style>
</style>
  