import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import WorksDetail from '@/components/pages/WorksDetail'
import About from '@/components/pages/About'
import Creative from '@/components/pages/Creative'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works/:id', component: WorksDetail },
    { path: '/about', name: 'About', component: About },
    { path: '/creative', name: 'Creative', component: Creative }
  ],
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 160)
    })
  }
})
