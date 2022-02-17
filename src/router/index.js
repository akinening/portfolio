import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import WorksDetail from '@/components/pages/WorksDetail'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works/:id', component: WorksDetail },
    { path: '/about', name: 'About', component: About }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
