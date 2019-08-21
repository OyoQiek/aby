const express=require("express");
var router=express.Router();
const pool=require("../pool");


//故事详情
router.get("/sdetail",(req,res)=>{
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
//分页查询商品的列表
app.get("/story",(req,res)=>{
    var p=req.query.pno;
    var ps=req.query.pagesize;
    if(!p){p=1}
    if(!ps){ps=4}
    var offset=(p-1)*ps;
    ps=parseInt(ps);
    var sql="SELECT subtitle,story_title,story_pic,zan FROM aby_story LIMIT ?,?";
    pool.query(sql,[offset,ps],(err,result)=>{
        if(err)throw err;
        res.send({code:1,msg:"查询成功",data:result})
    })
})

module.exports=router;