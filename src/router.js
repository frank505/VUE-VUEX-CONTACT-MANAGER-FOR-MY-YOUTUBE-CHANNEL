import Vue from 'vue'
import Router from 'vue-router'
import Home from './pages/auth/parentview/Home.vue'
import Login from './pages/auth/childview/Login.vue'
import Register from './pages/auth/childview/Register.vue'
import Dashboard from './pages/dashboard/parentview/Dashboard.vue'
import Cookies from 'js-cookie'

Vue.use(Router)

const router =  new Router({
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
    {
      path:'/dashboard',
      component:Dashboard,
    }
  ]
});

router.beforeEach((to, from, next) => {

  let cookies = Cookies.get("user-auth");

  if (to.fullPath === '/dashboard') 
  {
    if(cookies=='' || cookies == null)
    {
      next('/login');
    }    
  }

  if (to.fullPath === '/login') {
   if(cookies!='' && cookies!=null)
   {
     next('/dashboard');
   }
  }

  next();
});


export default router;