import Vue from 'vue'
import Router from 'vue-router'

// --注册组件
import Reg from "./components/reg/Reg.vue"
import Login from "./components/reg/Login.vue"
import Numberdx from "./components/reg/Numberdx.vue"
import UserAgreement from "./components/reg/UserAgreement.vue"
import Forget from "./components/reg/Forget.vue"


import order from "./components/order/order.vue"
import booking from "./components/order/booking.vue"
import Index from "./components/index/index.vue"
import Detail from "./views/detail.vue"


// 测试借口组件
import Vtest from "./views/test.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:Index},
    {path:'/index',component:Index},
    // --注册组件
    {path:'/Reg',component:Reg},
    {path:'/Login',component:Login},
    {path:'/Numberdx',component:Numberdx},
    {path:'/UserAgreement',component:UserAgreement},
    {path:'/Forget',component:Forget},


    {path:'/order',component:order},
    {path:'/detail',component:Detail},
    {path:'/booking',component:booking},

    // 测试借口组件 
    {path:'/Vtest',component:Vtest}
  ]
})
