import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/index'
import allCourse from '@/views/allCourse'
import myLearn from '@/views/myLearn'

// import hu from '@/components/hu'
// import swipeoutItem from '@/components/banner'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/allCourse',
      name: 'allCourse',
      component: allCourse
    },
    {
      path: '/myLearn',
      name: 'myLearn',
      component: myLearn
    }
//  {
//    path: '/hu',
//    name: 'hu',
//    component: hu
//  },
//  {
//    path: '/sw',
//    name: 'swipeout-item',
//    component: swipeoutItem
//  }
  ]
})
