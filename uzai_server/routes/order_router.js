const express = require("express");
const router = express.Router();
const pool = require("../pool");


router.get("/load",(req,res)=>{
  var obj = req.query;
  console.log(obj)
  // res.send(10086)
  var man_child = obj.man_count;
  var child_count = obj.child_count;
  var man_price = obj.man;
  var child_ = obj.child;

  
  var sql = `SELECT uname=? and upwd=? FROM uzi_user `
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err)throw err;
    console.log(result);
    console.log(333)
    if(result.RowDataPacket!=0){
      res.send("登陆成功")
    }
  })
})
router.get('/getload',(req,res)=>{
  var sql = "select * from uzi_goods ";
  pool.query(sql,(err,result)=>{
    if(err) throw err ;
    res.send(result);
  })
})
router.get("/reserve",(req,res)=>{
  var obj = req.query;
  var uid = req.session.uid;
  var oid = obj.oid;
  var gimg = obj.gimg;
  var gimg_title=obj.gtitle;
  var go_data = obj.gdata;
  var total_price = Number(obj.totalmoney);
  var sql = ``;
  var obj2 = {};
  // console.log(uid,oid,gimg,gimg_title,go_data)
  
  obj2={uid,oid,gimg,gimg_title,go_data,total_price}
  console.log(obj2)
    sql = `INSERT INTO user_reserve SET ?`
  
  pool.query(sql,[obj2],(err,result)=>{
    if(err) throw err ;
    if(result.affectedRows>0){
      res.send("1")
    }else{
      res.send("-1")
    }
  })
})
router.get("/lorder",(req,res)=>{
  var uid = req.session.uid;
  var sql = "select * from user_reserve where uid=?"
  pool.query(sql,[uid],(err,result)=>{
    res.send(result)
  })
})

module.exports=router;