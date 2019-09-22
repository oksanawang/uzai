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
  var uid = obj.uid;
  var man_count=obj.man_count;
  var child_count = obj.child_count;
  var man_price = obj.man_price;
  var child_price = obj.child_price;
  var mans_count = obj.mans_count;

  var sql = `INSERT INTO user_reserve VALUES(${uid},${man_count},${child_count},${man_price},${child_price},${mans_count})`;
  pool.query(sql,[uid,man_count,child_count,man_price,child_price,mans_count],(err,result)=>{
    if(err) throw err ;
    
  })
})

module.exports=router;