import { createRouter, createWebHistory } from 'vue-router';
import HomeComponent from '../pages/Home/HomeComponent.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
     
    }
  ]
})

export default router
