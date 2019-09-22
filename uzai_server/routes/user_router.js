const express = require("express");
const router = express.Router();
const pool = require("../pool");

router.get("/reg",(req,res)=>{
  var obj = req.body;
  console.log(obj);
  var sql = `INSERT INTO xz_user SET ? `;
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send(1)
    }else{
      res.send(0)
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
      res.send("1")
    }
  })

})
module.exports=router;