import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Works from '@/components/pages/Works'
import WorksDetail from '@/components/pages/WorksDetail'
import Media from '@/components/pages/Media'
import About from '@/components/pages/About'
import Skills from '@/components/pages/Skills'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works', name: 'Works', component: Works },
    { path: '/works/:id', component: WorksDetail },
    { path: '/media', name: 'Media', component: Media },
    { path: '/about', name: 'About', component: About },
    { path: '/skills', name: 'Skills', component: Skills }
  ]
})
