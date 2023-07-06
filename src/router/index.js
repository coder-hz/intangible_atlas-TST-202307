import Vue from 'vue'
import VueRouter from 'vue-router'
import Art from '../components/art.vue'
import Music from '../components/music.vue'
import Dance from '../components/dance.vue'
import Handwork from '../components/handwork.vue'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    {
      path: '/art',
      component: Art
    }, {
      path: '/music',
      component: Music
    }, {
      path: '/dance',
      component: Dance
    }, {
      path: '/handwork',
      component: Handwork
    }
  ]
})
export default router