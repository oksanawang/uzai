//使用express构建web服务器 --11:25
const express = require('express');
const session= require('express-session')
const bodyParser = require('body-parser');
const cors=require("cors");
// const mysql = require("mysql")
const userRouter=require("./routes/user_router");
const orderRouter=require("./routes/order_router");
const indexRouter=require("./routes/index");


var app = express();
app.listen(8080);
//添加cors中间件函数
//统一为每个请求先修改响应头
app.use(cors({
  origin:["http://127.0.0.1:5050","http://127.0.0.1:5050"],//不能用*
  credentials:true
}));


// 配置session--oksana
// #session配置一定要在所有的请求之前
//安全字符串
app.use(session({
  secret:"uzi",    //安全字符串
  resave:true,            //每次请求保存数据
  saveUninitialized:true  //保存初始化数据
}));


//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
//托管静态资源到public目录下
//app.use(express.static('public'));
/*使用路由器来管理路由*/
 app.use("/index",indexRouter);
app.use("/user",userRouter);
app.use("/order",orderRouter);


