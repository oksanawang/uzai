import Vue from 'vue'
import App from './App.vue'
import router from './router'

//删除5-6行
// import'mint-ui/lib/style.css'
//1.引入第三方组件库mint-ui
//1.1完成引入所有组件
import MintUI from "mint-ui"
//1.2单引入mint-ui样式文件
import "mint-ui/lib/style.css"
//1.3将mint-ui 注册vue
Vue.use(MintUI)
// 1.4引入图标字体文件
import "./font/iconfont.css"
// main.js配置axios-
//1.5引入axios库
import axios from "axios"
// 1.6配置请求时保存session信息
axios.defaults.withCredentials=true
// 1.7：配置请求基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
// 注意：地址栏必须输入！！！！！！！
// http://127.0.0.1:8080/！！！！！
// 如果地址http://localhost 报错
// 1.8：注册
Vue.prototype.axios = axios;

// 功能：使用vuex保存共享数据
// 1.9：引入第三方模块
import Vuex from "vuex"
// 1.10：注册实例（先注册，在创建存储对象）
Vue.use(Vuex)
// 1.11：创建存储对象

import bus from "./bus"
Vue.prototype.bus=bus;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
