import { createRouter, createWebHistory } from 'vue-router'
import VistaCombate from '@/views/VistaCombate.vue'
import VistaPersonajes from '@/views/VistaPersonajes.vue'
import VistaEscenarios from '@/views/VistaEscenarios.vue'

const routes = [
  {
    path: '/',
    name: 'personajes',
    component: VistaPersonajes
  },
  {
    path: '/escenarios',
    name: 'escenarios',
    component: VistaEscenarios
  },
  {
    path: '/combate',
    name: 'combate',
    component: VistaCombate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
