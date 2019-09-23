//使用express构建web服务器 --11:25
const express = require('express');
const session= require('express-session')
const bodyParser = require('body-parser');
const cors=require("cors");
// const mysql = require("mysql")
const userRouter=require("./routes/user_router");
const orderRouter=require("./routes/order_router")
/*引入路由模块*/


var app = express();
var server = app.listen(8080);
//添加cors中间件函数
//统一为每个请求先修改响应头
app.use(cors({
  origin:["http://127.0.0.1:5050","http://localhost:5050"],//不能用*
  credentials:true
}));


app.use(session({
  secret:"128位字符串",    //安全字符串
  resave:true,            //每次请求保存数据
  saveUninitialized:true  //保存初始化数据
}));


//使用body-parser中间件
app.use(bodyParser.urlencoded({extended:false}));
app.use("/user",userRouter);
app.use("/order",orderRouter);


