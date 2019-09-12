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
// 1.4引入图标字体晚间
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
var store=new Vuex.Store({
  state:{//集中管理数据方法
    age:45,             //年龄age：23
    list:[1,2,3,4,5],   //集中管理
    car:"七手QQ",
  },
  mutations:{
      clear(state){ //添加清除年龄方法
        state.age=0
      },
      updateCar(state){
        state.car="三手夏利";
      },
      updateAge(state,age){
        // state.age="25";
        state.age=age;
      }
  },
  getters:{//集中获取数据函数
    getAge(state){//特殊：所有的函数都有参数
      return state.age;
    },
    getList(state){//集中获取数据函数
       return state.list;
    },
    getCar(state){
      return state.car;
    }
  },
//  actions:{//集中保存异步数据修改数据函数
//  modifyAge:(context)=>{//异步调用clear
//      setTimeout(()=>{
//        //异步调用mutations中定义函数
//        //完成异步修改数据功能
//        context.commit("clear");
//      },500)
//    }
//  }
//})
actions:{   //保存异步修改的数据函数
    modifyAge:(context)=>{
      setTimeout(()=>{
        //异步调用mutation中定义函数
        //完成异步修改数据功能
        context.commit("clear")
      },500)
    }
  }
})





// 1.12：将存储对象添加到vue实例，作为属性
new Vue({
  router,
  render: h => h(App),
  store         //!!!!!!!!!!!
}).$mount('#app')





// Vue.config.productionTip = false
//5: 设置请求的根路径 
//Vue.http.options.root = "http://127.0.0.1/vue_ser/";
//6:全局设置post 时候表音的数据组织格式为 application/x-www-form-urlencoded
//Vue.http.options.emulateJSON = true;
// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
// import './lib/mui/css/mui.css'
// 导入 MUI 的样式表，扩展图标样式，购物车图标
// 还需要加载图标字体文件
// import './lib/mui/css/icons-extra.css'

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
