const express=require("express");
var router=express.Router();
const pool=require("../pool");
// 登陆
router.get("/login",(req,res)=>{
    var uname=req.query.uanem;
    var upwd=req.query.upwd;
    var sql=`select * from aby_user where uname=? and upwd=?`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.length){
            req.session.uid=result[0].uid;
            res.send({code:1,msg:"登陆成功"});
        }else{
            res.send({code:-1,msg:"用户名或密码错误"})
        }
    })
});
// 注册
router.post("/reg",(req,res)=>{
    var uname=req.body.uanem;
    var upwd=req.body.upwd;
    var sql=`insert into aby_user values(null,?,?,null,null,null,null,null,null,null)`;
    pool.query(sql,[uname,upwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
            res.send({code:1,msg:"注册成功"});
        }else{
            res.send({code:-1,msg:"请稍后再试"})
        }
    })
});


module.exports=router;