<template>
    <div>
        <div class="container">
            <div id="search">
                <input type="text" placeholder="搜索杭州的美食故事">
                <span class="iconfont icon-iconset0157"></span>
            </div>
            <div id="nav">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="d1">名宿</mt-tab-item>
                    <mt-tab-item id="d2">美食</mt-tab-item>
                    <mt-tab-item id="d3">景点</mt-tab-item>
                    <mt-tab-item id="d4">艺术</mt-tab-item>
                </mt-navbar>
            </div> 
        </div>
        <div id="nav-page">
             <mt-tab-container v-model="selected">
                <mt-tab-container-item id="d1">
                    <message></message>
                </mt-tab-container-item>
                <mt-tab-container-item id="d2">
                    asdsa
                </mt-tab-container-item>
                <mt-tab-container-item id="d3">
                    <message></message>
                </mt-tab-container-item>
                <mt-tab-container-item id="d4">
                   sadsadsa
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
        <div class="write_story">
            <span>写故事</span>
            <span class="iconfont icon-jia "></span>
        </div>   
    </div>    
</template>
<script>
import Message from "../components/story/message.vue"
export default {
     data(){
        return{
            selected:"d1"
        }
    },
    components:{
        Message,
    }
}
</script>
<style scoped>

    .container{
        position: fixed;
        width: 100%;
        z-index: 888;
        background: #fff;
    }
    #search{
        position: relative;
    }
    #search span{
        position: absolute;
        top:24px;
        left:29px;
    }
    #search input{
        box-shadow:0px 0px 15px 5px rgb(0,0,0,0.1);
        border: 0;
        margin: 15px 5%;
        width: 90%;
        padding: 10px 30px;
        outline: none;
        box-sizing: border-box;
    }
    #nav{
        color:#999;
        
        box-shadow:0px 2px 5px 0px rgb(0,0,0,0.1);
    }
    .mint-navbar .mint-tab-item.is-selected {
        border-bottom: 2px solid #000;
        color: #000;
    }

    .write_story{
        background: #fff;
        position: fixed;
        bottom: 80px;
        left:38%;
        padding: 8px 15px;
        border-radius: 50px;
        box-shadow: 0 0 15px 1px #999;
    }
    .write_story:hover{
        background: #d3d2d2;
    }
    .write_story span:first-child{
        font-size: 13px;
        margin-right: 10px;
        columns: #484848;
    }
    .write_story span:last-child{
        color:#484848;
        font-size:17px;
    }
</style>
