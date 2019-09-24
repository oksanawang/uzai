const express=require("express");
const router=express.Router();
const pool=require("../pool");

//查询数据库中的
router.get("/tnt",(req,res)=>{
  var sql = `select * from uzi_user `
  pool.query(sql,(err,result)=>{
    if(err){
      res.send(err)
    }else{
      res.send(result)
    }
    
  })
})


router.get("/",(req,res)=>{
  var sql=`SELECT * FROM xz_index_product where seq_recommended!=0 order by seq_recommended`;
  pool.query(sql,[],(err,result)=>{
    if(err){
      res.send(err);
      console.log(err);
    }else{
      res.send(result);
      /*res.writeHead(200,{
        "Access-Control-Allow-Origin":
          "*"
      });
      res.write(JSON.stringify(result));
      res.end();*/
    }
  })
})

module.exports=router;