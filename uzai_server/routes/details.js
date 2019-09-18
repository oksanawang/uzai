const express=require("express")
const router=express.Router();
const pool=require("../pool")

//app.use("/details",Details)
//服务端接口地址http://localhost:3000/details
//客户端请求时:
//http://localhost:3000/details?lid=1
router.get("/",(req,res)=>{
  var lid=req.query.lid;
  var output={
    product:{},
    specs:[],
    pics:[]
  }
  if(lid!==undefined){
    var sql1=`select * from xz_laptop where lid=?`;
    pool.query(sql1,[lid],(err,result)=>{
      if(err) console.log(err);
      output.product=result[0];
      console.log(output);
      var family_id=output.product["family_id"];
      var sql2=`select spec,lid from xz_laptop where family_id=?`;
      pool.query(sql2,[family_id],(err,result)=>{
        if(err) console.log(err);
        output.specs=result;
        console.log(output);
        var sql3=`select * from xz_laptop_pic where laptop_id=?`
        pool.query(sql3,[lid],(err,result)=>{
          if(err) console.log(err);
          output.pics=result;
          console.log(output);
          res.send(output);
        })
      })
    })
  }else{
    res.send(output);
  }
})

module.exports=router;