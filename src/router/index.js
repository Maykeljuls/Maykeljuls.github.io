import { createRouter, createWebHistory } from 'vue-router'
import ShowView from '../views/ShowView.vue'
import EditorView from '../views/EditorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'text editor',
      component: EditorView
    },
    {
      path: '/show',
      name: 'show',
      component: ShowView
    }
  ]
})

export default router
