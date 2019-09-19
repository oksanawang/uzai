import Vue from 'vue'
import Router from 'vue-router'

// --注册组件
import Reg from "./components/reg/Reg.vue"
import Login from "./components/reg/Login.vue"
import Number from "./components/reg/Number.vue"
import order from "./components/order/order.vue"
import Index from "./components/index/index.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/index',component:Index},
    // --注册组件
    {path:'/Reg',component:Reg},
    {path:'/Login',component:Login},
    {path:'/Number',component:Number},
    {path:'/order',component:order},
  ]
})
