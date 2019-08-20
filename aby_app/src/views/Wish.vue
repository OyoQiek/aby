<template>
    <div>
        <div class="xyd_dl">
            <div class="xyd_fh">
                <span class="iconfont icon-zuo"></span>
            </div>
            <div id="nav">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="d1">房源</mt-tab-item>
                    <mt-tab-item id="d2">故事</mt-tab-item>
                </mt-navbar>
            </div> 
            <div id="nav-page">
             <mt-tab-container v-model="selected">
                <mt-tab-container-item id="d1">
                    <message></message>
                </mt-tab-container-item>
                <mt-tab-container-item id="d2">
                    asdsa
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        </div>
        <div class="xyd">
            <div class="xyd_wdl">
                <h1>心愿单</h1>
                <p>登录爱彼迎，查看你的心仪房源、体验与故事</p>
                <img src="../../public/images/xyd.png" alt="">
                <div>
                <a href="javascript:">登录</a> 
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
import Message from "../components/story/message.vue"
export default {
    data() {
        return {
            selected:"d1"
        }
    },
    components:{
        Message,
    }
}
</script>
<style scoped>
    .xyd{
        margin:5%;
        display: none;
    }
    .xyd_wdl p{
        color:#484848;
        margin:3% 0;
        font-size: 16px;
    }
    .xyd_wdl img{
        width: 80%;
        margin-bottom: 5%;
    }
    .xyd_wdl a{
        font-size: 14px;
        color:#008489;
        font-weight: bold;
        padding: 8px 20px;
        border: 2px solid #008489;
        border-radius: 5px;
    }
    .xyd_fh{
        border-bottom: 1px solid #999;
    }
    .xyd_fh span{
        line-height: 60px;
        font-size: 30px;
        margin:0 3%;
    }
    .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #008489;
    color: #008489;
    }
    .mint-navbar{
        width: 40%;
    }
</style>
