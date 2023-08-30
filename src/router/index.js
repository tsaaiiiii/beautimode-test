import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/TodoView.vue')
    },
    {
      path: '/mealtime',
      name: 'mealtime',
      component: () => import('../views/MealView.vue')
    },
    {
      path: '/codereview',
      name: 'codereview',
      component: () => import('../views/CodeReview.vue')
    }
  ]
})

export default router
