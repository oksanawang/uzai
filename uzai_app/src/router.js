import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"




Vue.use(Router)
export default new Router({
  routes: [
    {path:'/',component:HelloContainer},
  ]
})
