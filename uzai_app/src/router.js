import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
// --注册组件
import Reg from "./components/reg/Reg.vue"
import Login from "./components/reg/Login.vue"



Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
    // --注册组件
    {path:'/Reg',component:Reg},
    {path:'/Login',component:Login},
  ]
})
