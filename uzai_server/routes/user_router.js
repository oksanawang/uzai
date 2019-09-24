const express = require("express");
const session = require("express-session")
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
  var sql = `SELECT uid FROM uzi_user WHERE uname=? and upwd=?`
  pool.query(sql,[uname,upwd],(err,result)=>{

    if(err)throw err;
    // console.log(result)
    if(result!=""){
      var id = result[0].uid
      // console.log(id[0].uid);
      req.session.uid = id ;
      console.log(req.session)
      res.send("1");
      //req.session.user = result.dataValues
      //req.session.islogin = true;
    }
    
  })
}),
router.get("/test",(req,res)=>{
  pool.query('select * from A',(err,result)=>{
    if(err) throw err;
    var uid = req.session;
    console.log(uid);
    res.send(uid);
  });
})
module.exports=router;