import Vue from 'vue'
import Router from 'vue-router'
import 'vue-loaders/dist/vue-loaders.css'
import VueLoaders from 'vue-loaders'

import Index from '@/components/pages/Index'
import WorksDetail from '@/components/pages/WorksDetail'
import About from '@/components/pages/About'
import Creative from '@/components/pages/Creative'
import Starlight from '@/components/pages/Starlight'

Vue.use(Router)
Vue.use(VueLoaders)

export default new Router({
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/works/:id', component: WorksDetail },
    { path: '/about', name: 'About', component: About },
    { path: '/creative', name: 'Creative', component: Creative },
    { path: '/starlight', name: 'Starlight', component: Starlight }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
