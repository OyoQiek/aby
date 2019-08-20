<template>
    <div>
        <div class="login">
            <div>
                <h1>账号密码登录</h1>
                <p>使用已注册手机号或邮箱登录</p>
                <div>
                <span>手机号/邮箱地址</span>
                <input type="text"> 
                </div>
                <div>
                    <span>密码</span>
                    <input type="password">
                </div>
                <div class="btn">
                    <a href="javascript:">立即登录</a>
                </div>
                <div class="reg_btn">
                    <span>立即注册?</span>
                </div>
            
            </div>
        </div>
        <div class="login">
            <div>
                <h1>账号密码注册</h1>
                <div>
                <span>手机号/邮箱地址</span>
                <input type="text"> 
                </div>
                <div>
                    <span>密码</span>
                    <input type="password">
                </div>
                  <div>
                    <span>确认密码</span>
                    <input type="password">
                </div>
                <div class="btn">
                    <a href="javascript:">立即注册</a>
                </div>
                <div class="reg_btn">
                    <span>已有账号,请登录?</span>
                </div>
            
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>
<style scoped>
    .login{
        margin:10% 5%;
        color: #484848;
    }
    .login p{
        
        font-size: 15px;
        margin: 2% 0;
    }
    .login div  div span{
        display: block;
        font-size: 14px;
        margin-top: 20px;
    }
    .login div  div input{
        border:0;
        outline: 0;
        border-bottom: 1px solid #999;
        width: 100%;
        line-height: 40px;
        color: #484848;
    }
    .login div.btn{
        border:1px solid #008489;
        background:#008489 ;
        text-align: center;
        padding: 3% 0;
        border-radius: 5px;
        margin-top:10%;
    }
    .login div  div a{
        color:#fff;
        font-size: 14px;
    }
    .login div.reg_btn{
        text-align: right;
    }
</style>
