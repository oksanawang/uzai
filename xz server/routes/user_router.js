const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.post("/reg",(req,res)=>{
  var obj = req.body;
  console.log(obj);
  var sql = `INSERT INTO xz_user SET ? `;
  pool.query(sql,[obj],function(err,result){
    if(err) throw err;
    if(result.affectedRows>0){
      res.send('注册成功')
    }
  })
})
router.get("/login",(req,res)=>{
  var obj = req.query;
  console.log(obj)
  // res.send(10086)
  var uname = obj.uname;
  var upwd = obj.upwd ;
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