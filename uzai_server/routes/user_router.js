const express = require("express");
const session = require("express-session")
const router = express.Router();
const pool = require("../pool");

router.get("/reg",(req,res)=>{
  console.log(req.query);
  var phone = req.query.phone;
  var upwd = req.query.upwd;
  var uname = 'uzai'+phone;
  var obj={
    uname,
    upwd,
    phone
  }
  var sql = `INSERT INTO uzi_user SET ? `;
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send("1")
    }else{
      res.send("-1")
    }
  })
})
router.get("/quit",(req,res)=>{
  req.session.uid=null;
  res.send("222")
})
router.get("/login",(req,res)=>{
  var obj = req.query;

  // console.log(obj)
  // res.send(10086)
  var uname = obj.uname;
  var upwd = obj.upwd ;
  var sql =``;
  var regUname = /^1[3-9]\d{9}$/
  if(regUname.test(uname)){
    sql = `SELECT uid FROM uzi_user WHERE phone=? and upwd=?`
    // console.log(1)
  }else{
    var sql = `SELECT uid FROM uzi_user WHERE uname=? and upwd=?`
    // console.log(2)
  }
  pool.query(sql,[uname,upwd],(err,result)=>{

    if(err)throw err;
    // console.log(result)
    if(result!=""){
      var id = result[0].uid
      // console.log(id[0].uid);
      req.session.uid = id ;
      // console.log(req.session)
      res.send("1");
      //req.session.user = result.dataValues
      //req.session.islogin = true;
    }
  })
}),
router.get("/load",(req,res)=>{
   var uid = req.session.uid;
   if(uid!=undefined){
   var sql = `select uname from uzi_user where uid=?`
   pool.query(sql,[uid],(err,result)=>{
     if(err) throw err;
     var uname = result[0].uname;
     res.send({uid,uname});
   })
  }
})
router.get("/test",(req,res)=>{


    var uid = req.session.uid;
    console.log(uid)
    if(!uid){
      res.send("-100")
    }

})
module.exports=router;