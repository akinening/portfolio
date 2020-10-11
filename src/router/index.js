import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/pages/Index'
import About from '@/components/pages/About'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/about', name: 'About', component: About }
  ]
})
