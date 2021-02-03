import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/auth/parentview/Home.vue'
import Login from './pages/auth/childview/Login.vue'
import Register from './pages/auth/childview/Register.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: Home,
      children: [
        {
          path: 'login',
          component: Login,         
        },
         {
          path: 'register',
          component: Register,         
        }       
      ],
    },
  ]
})
