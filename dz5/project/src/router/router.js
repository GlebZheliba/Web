import { createRouter, createWebHistory } from "vue-router";
   import TheHome from '../components/TheHome.vue' 
   import CreatePost from '../components/CreatePost.vue' 
   import PostDetails from '../components/PostDetails.vue' 


   const routes = [
    {
      path: '/',
      name: 'TheHome',
      component: TheHome
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost
    },
    {
      path: '/posts/:id',
      name: 'PostDetails',
      component: PostDetails,
      props: true
    }
  ]

  const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;