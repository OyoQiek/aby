const express=require("express");
var router=express.Router();
const pool=require("../pool");


//故事详情
router.get("/hdetail",(req,res)=>{
    var storyid=req.query.storyid;
    var sql=`select * from aby_story where storyid=?`;
    pool.query(sql,[storyid],(err,result)=>{
        if(err) throw err;
        if(result.length){
            res.send({code:1,msg:"查询成功",data:result});
        }else{
            res.send({code:-1,msg:"查询失败",data:""});
        }
    })
});


module.exports=router;