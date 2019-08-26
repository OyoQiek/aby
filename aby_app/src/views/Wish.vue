<template>
    <div>
        <div class="xyd_dl" :class="{'divSH':SH}">
            <div id="nav">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="d1">房源</mt-tab-item>
                    <mt-tab-item id="d2">故事</mt-tab-item>
                </mt-navbar>
            </div> 
            <div id="nav-page">
             <mt-tab-container v-model="selected">
                <mt-tab-container-item id="d1">
                    <div class="collect_h">暂无收藏</div>
                </mt-tab-container-item>
                <mt-tab-container-item id="d2">
                    <div class="collect_s">暂无故事</div>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        </div>
        <div class="xyd" :class="{'divSH':!SH}">
            <div class="xyd_wdl">
                <h1>心愿单</h1>
                <p>登录爱彼迎，查看你的心仪房源、体验与故事</p>
                <img src="../../public/images/xyd.png" alt="">
                <div>
                <router-link to="/Login">登录</router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>

export default {
    data() {
        return {
            selected:"d1",
            SH:true,
            data:{}
        }
    },
    created() {
        this.load()
    },
    methods: {
        load(){
            this.axios.get(
                "/house/getWishHouse"
            ).then(res=>{
                this.data=res.data;
                console.log(this.data)
                if(this.code>0){

                }else{
                    this.SH="false"
                }
            })
        }
        
    },
    components:{

    }
}
</script>
<style scoped>
.mint-navbar{
    width: 100% !important;
}
.mint-navbar .mint-tab-item{
    display: block;
    font-size: 14px !important;
    height: 40px !important;
    padding-top: 13px !important;
}
.collect_h,.collect_s{
    text-align: center;
    margin-top: 30px;
}
.divSH{
    display: none;
}
    .xyd{
        margin:5%;
    }
    .xyd_wdl h1{
        font-size: 24px;
        font-family: Circular, "PingFang-SC";
        font-weight: bold;
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
