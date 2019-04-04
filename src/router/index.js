import Vue from 'vue'
import Router from 'vue-router'
import home from '../components/home/home.vue'
import one from '../components/content/pages/contentOne.vue'
import two from '../components/content/pages/contentTwo'
import three from '../components/content/pages/contentThree'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'home',
    component: home,
    children: [
      // {
      //   path: '/',
      //   name: 'one',
      //   component: one
      // }
      {
        path: '/c1',
        name: 'one',
        component: one
      }, {
        path: '/c2',
        name: 'two',
        component: two
      }, {
        path: '/c3',
        name: 'three',
        component: three
      }
    ]
  }]
})
