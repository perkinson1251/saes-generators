import HomeView from '@/views/HomeView.vue'
import SFPDView from '@/views/SFPDView.vue'

import SFPDBackHome from '@/views/sfpd/SFPDBackHome.vue'
import SFPDPersonalFile from '@/views/sfpd/SFPDPersonalFile.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sfpd',
      name: 'sfpd',
      component: SFPDView
    },
    // SFPD
    {
      path: '/sfpd/backhome',
      name: 'sfpd-backhome',
      component: SFPDBackHome
    },
    {
      path: '/sfpd/personal-file',
      name: 'sfpd-personal-file',
      component: SFPDPersonalFile
    }
  ]
})

export default router
