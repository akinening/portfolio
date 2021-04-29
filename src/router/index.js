import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import WorksDetail from '@/components/pages/WorksDetail'
import Media from '@/components/pages/Media'
import About from '@/components/pages/About'
import Skills from '@/components/pages/Skills'
import Starlight from '@/components/pages/Starlight'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works/:id', component: WorksDetail },
    { path: '/media', name: 'Media', component: Media },
    { path: '/about', name: 'About', component: About },
    { path: '/skills', name: 'Skills', component: Skills },
    { path: '/starlight', name: 'Starlight', component: Starlight }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
