import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'Index',
      redirect: '/one',
      component: () => import( './views/Index'),
      children:[
          {
              //因为某些设置首页路由只能为 "/"
              path: '',
              component: () => import( './views/PageOne'),
              meta:{
                  cName:'首页'
              }
          }, {
              path: '/two',
              component: () => import( './views/PageTwo'),
              meta:{
                  cName:'页面二'
              }
          }, {
              path: '/three',
              component: () => import( './views/PageThree'),
              meta:{
                  cName:'页面三'
              }
          }, {
              path: '/four',
              component: () => import( './views/PageFour'),
              meta:{
                  cName:'页面四'
              }
          },
      ]
    }
  ]
})
