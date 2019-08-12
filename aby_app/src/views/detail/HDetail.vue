<template>
    <div>
        <div class="fixed_top">
            <div class="pr">
                <div><img src="images/back.jpg" alt=""></div>
                <div><span class="iconfont icon-aixin collect"></span></div>
            </div>
        </div>
        <div style="height:240px; background:#ddd;"></div>
        <div class="baseinfo base">
            <div class="title_top"><b>成都市</b> · <b>整套公寓</b></div>
            <div class="title">【afterhours】九眼桥/春熙路/近地铁口公寓  Cozy studio near metro</div>
            <div class="info_tag">
                <ul class="tags">
                    <li class="grenn">新房源</li>
                    <li class="orange">整套房子</li>
                    <li class="huise">近地铁站</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import Carousel from '../../components/carousel'
export default {
    components:{
        Carousel,
    }
}
</script>
<style scoped>
    .fixed_top{
        position: absolute;
        background: transparent;
        width: 100%;
        height: 60px;
        /* 
        position:fixed;
        background:#fff;
        */
    }
    .fixed_top .pr{
        position: relative;
        text-align: center;
    }
    .fixed_top .pr div{
        position: absolute;
        top: 14px;
        cursor: pointer;
    }
    .fixed_top .pr div:first-child{
        left: 20px;
    }
    .fixed_top .pr div:first-child img{
        width: 32px;
        height: 32px;
    }
    .fixed_top .pr div:last-child{
        background: rgba(0,0,0,.35);
        width: 32px;
        height: 32px;
        border-radius: 50%;
        line-height: 30px;
        color: #fff;
        right: 20px;
    }

    /* 房源基本信息 */
    .base{
        padding: 16px 24px;
        background: #fff;
    }
    .baseinfo{
        color: #484848;
        font-size: 14px;
    }
    .title_top{
        color: #341e13;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .title{
        color: #484848;
        font-size: 18px;
        margin-bottom: 8px;
        font-weight: bold;
    }
    .info_tag .tags{
        padding-bottom: 16px;
        color: #484848;
        font-size: 14px;
    }
    .info_tag .tags li{
        padding: 6px 10px;
        font-size: 12px;
        line-height: 16px;
        font-weight: bold;
        height: 28px;
        box-sizing: border-box;
        display: inline-block;
        border-radius: 4px; 
    }
    .info_tag .tags li~li{
        margin-left: 4px;
    }
    .info_tag .tags li:first-child{
        background: #EAF7EA !important;
        color: #296E00 !important;
    }
    .info_tag .tags li:nth-child(2){
        background: #f7f3ea !important;
        color: #8A2400 !important;
    }
    .info_tag .tags li:nth-child(2) ~li{
        background: #F2F2F2 !important;
    }
</style>
