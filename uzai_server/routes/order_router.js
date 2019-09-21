const express = require("express");
const router = express.Router();
const pool = require("../pool");


router.get("/order",(req,res)=>{
  var obj = req.query;
  console.log(obj)
  // res.send(10086)
  var man_child = obj.man_count;
  var child_count = obj.cli_count;
  
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

module.exports=router;