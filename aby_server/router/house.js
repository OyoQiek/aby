const express=require("express");
var router=express.Router();
const pool=require("../pool");

//房源详情
router.get("/hdetail",(req,res)=>{
    var hid=req.query.hid;
    var sql=`select * from aby_house inner join aby_Tags on aby_house.hid=aby_Tags.hid where aby_house.hid=?`;
    pool.query(sql,[hid],(err,result)=>{
        if(err) throw err;
        var data=[];
        data.length=2;
        if(result.length){
            data[0]=result;
            sql=`select * from aby_remark where hid=?`;
            pool.query(sql,[hid],(err,result1)=>{
                if(err) throw err;
                if(result1.length>0){
                    data[1]=result1;
                    res.send({code:1,msg:"查询成功",data:data});
                }else{
                    res.send({code:1,msg:"查询成功",data:data});
                }
            })
        }else{
            res.send({code:-1,msg:"查询失败",data:""});
        }
    })
});
// 查询评论
router.get("/remark",(req,res)=>{
    var hid=req.query.hid;
    var sql=`select * from aby_remark where hid=?`;
    pool.query(sql,[hid],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:"查询成功",data:result});
        }else{
            res.send({code:1,msg:"查询成功",data:""});
        }
    })
})
//查询所有房源按时间倒序

module.exports=router;