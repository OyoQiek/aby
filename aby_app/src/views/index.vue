<template>
    <div class="nav_bar">
             <mt-tab-container v-model="selected">
                <mt-tab-container-item id="d1">
                    dasdsad
                </mt-tab-container-item>
                <mt-tab-container-item id="d2">
                    <Wish/>
                </mt-tab-container-item>
                <mt-tab-container-item id="d3">
                    <story/>
                </mt-tab-container-item>
                <mt-tab-container-item id="d4">
                  <Login/> 
                </mt-tab-container-item>
            </mt-tab-container>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="d1">
                <p class="iconfont icon-iconset0157 "></p>
                探索
            </mt-tab-item>
            <mt-tab-item id="d2">
                 <p class="iconfont icon-aixin "></p>
                心愿单
            </mt-tab-item>
            <mt-tab-item id="d3">
                 <p class="iconfont icon-zhiwu "></p>
                故事
            </mt-tab-item>
            <mt-tab-item id="d4">
                <p class="iconfont icon-sousuo "></p>
                我的
        </mt-tab-item>
</mt-tabbar>
    </div>
</template>
<script>
import Story from "./story.vue"
import Login from "./Login.vue"
import Wish from "./Wish.vue"
export default {
    data() {
        return {
            selected:"d1"
        }
    },
    components:{
        Story,
        Wish,
        Login
    }
}
</script>
<style scoped>
.mint-tabbar{
    height: 60px;
   display: flex;
   align-items: center;
   border-top: 1px solid #999;
}
.mint-tabbar > .mint-tab-item.is-selected{
    color:#f00;
    background: #fff;
}
.mint-tabbar > .mint-tab-item.is-selected div p{
    color:#f00;
}
.mint-tab-item-label p:first-child{
    font-size: 22px;
    margin-bottom: 5px;
    color:#484848;
}
.mint-tab-item-label p.icon-zhiwu{
    font-size: 28px;
    margin-bottom: 2px;
    color:#484848;

}
mint-tab-item {
    font-size:30px !important;
}
</style>
