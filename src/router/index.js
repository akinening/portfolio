import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import Works from '@/components/pages/Works'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works', name: 'Works', component: Works },
    { path: '/about', name: 'About', component: About }
  ]
})
