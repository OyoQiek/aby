const express=require("express");
var router=express.Router();
const pool=require("../pool");

//房源详情
router.get("/hdetail",(req,res)=>{
    var hid=req.query.hid;
    var sql=`select * from aby_house where hid=?`;
    pool.query(sql,[hid],(err,result)=>{
        if(err) throw err;
        if(result.length){
            res.send({code:1,msg:"查询成功",data:result});
        }else{
            res.send({code:-1,msg:"查询失败",data:""});
        }
    })
});
//查询所有房源按时间倒序

module.exports=router;