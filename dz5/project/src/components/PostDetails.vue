<template>
    <div>
      <PostCard :post="post" :id="$route.params.id"/>
      <router-link to="/" class="return-link">Назад</router-link>
    </div>
  </template>
  
  <script>
  import PostCard from "@/components/PostCard.vue"
  import axios from "axios";
  
  export default {
      name: "PostDetails",
      components: {
        PostCard
      },
      data() {
        return {
          post: {
            default: {},
            type: Object,
            required: true
          }
        }
      },
      props: {
          id: String
      },
      async created() {
        try {
          this.post = (await axios.get(`http://localhost:5180/api/Posts/${this.id}`)).data;
          console.log(this.post)
        } catch (error) {
          alert(error);
        }
      }
  }
  </script>
  
  <style scoped>
  .return-link {
    margin-top: 20px;
    margin-left: 50%;
  }
  </style>