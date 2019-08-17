<template>
    <div class="hd">
        <!-- 头部 -->
        <div class="fixed_top">
            <div class="pr">
                <div><span class="iconfont icon-zuo top_back"></span></div>
                <div><span class="iconfont icon-aixin collect"></span></div>
            </div>
        </div>
        <!-- 轮播图 -->
        <div style="height:240px;"> <carousel/> </div>
        <!-- 基本信息 -->
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
        <!-- 优惠模块 -->
        <div class="base youhui">
            <div class="youhui_bg">
                <div><img src="images/h_detail_notice.gif" alt=""></div>
                <div><b>享受8月1日-8月15日期间的9折优惠</b>在2天内完成预定,锁定现时好价</div>
            </div>
        </div>
        <!-- 房源概览 -->
        <div class="base fangyuangailan">
            <h2>房源概览</h2>
            <div class="icon_notice">
                <ul>
                    <li><span class="iconfont icon-icon-p_lianxirenguanli"></span><i>2</i>位房客</li>
                    <li><span class="iconfont icon-woshi"></span><i>1</i>间卧室</li>
                    <li><span class="iconfont icon-woshi1"></span><i>1</i>张床</li>
                </ul>
            </div>
            <div class="fygl_info">
                <HouseFygs/>
            </div>
        </div>
        <!-- 摘要 -->
        <div class="abstract base">
            <h2>摘要</h2>
            <div>摘要内容..........................................................asdsadsadsadasdsadasdasda.........</div>
            <router-link to="/HDetail/abstract" class="abstract_view">查看详情</router-link>
        </div>
        <!-- 评价 -->
        <div class="remark base">
            <h2>评价</h2>
            <div class="remark_star_w">
                <div>   
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                </div>
            </div>
            <div class="remark_user">
                <div>
                    <img src="images/h_detail/01/01.jpg" class="remark_head_pic" alt="">
                    <div>
                        <p>扩达</p>
                        <span>2019年8月</span>
                    </div>
                </div>
                <div>
                    老板很负责,房子热水24小时供应,还有一个超大的投影仪,还有一个蓝牙音箱让我高兴坏了,对于喜欢听歌的我来说是真爱,床也很大两个人完全没有问题,一句话,老哥稳~
                </div>
                <router-link to="/HDetail/remark" class="remark_view">阅读全部评价</router-link>
            </div>
        </div>
        <!-- 房源位置 -->
        <div class="base h_local">
            <h2>房源位置</h2>
            <div class="h_local_info">
                <div>
                    <span>杭州市</span>
                    <span>，浙江省</span>
                    <span>，中国</span>
                </div>
                <span><img src="images/map_local.png" alt=""></span>
            </div>
            <div class="h_local_cont">
                房源的地理位置相当优越,首先毗邻太古里,从小区的后门出去就1min直达太古里,不仅有高大上的各国餐厅还有各种特色小吃,晚上逛逛太古里,在里面的小酒吧小酌一杯感受气氛非常的美妙｡3min到达ifs国际金融中心里面各种大牌琳琅满目,ifs旁边就是熊猫班车,每天滚动发车可到达各个景点,您也可以选择坐地铁都是不错的选择｡
            </div>
        </div>
        <!-- 服务设施 -->
        <div class="server">
            <h2>设施/服务</h2>
            <div class="server_cont">
                <div class="server_type">
                    <div>
                        <span class="iconfont icon-mendianliebiao"></span>
                        入住服务
                    </div>
                    <ul>
                        <li>可预订长期住宿</li>
                        <li>独立入口</li>
                        <li>可以存放行李</li>
                    </ul>
                </div>
                <div class="server_type">
                    <div>
                        <span class="iconfont icon-wuxian"></span>
                        基础设施
                    </div>
                    <ul>
                        <li>空调</li>
                        <li>洗衣机</li>
                        <li>无线网络</li>
                        <li>暖气</li>
                    </ul>
                </div>
                <div class="server_type">
                    <div>
                        <span class="iconfont icon-yugang"></span>
                        洗浴设施
                    </div>
                    <ul>
                        <li>洗发水</li>
                        <li>吹风机</li>
                        <li>生活必需品</li>
                        <li>热水</li>
                    </ul>
                </div>
                <div class="server_type">
                    <div>
                        <span class="iconfont icon-canju"></span>
                        厨房用品
                    </div>
                    <ul>
                        <li>厨房</li>
                    </ul>
                </div>
                <!-- <router-link to="/HDetail/server" class="server_view">查看全部</router-link> -->
            </div>
        </div>
        <!-- 入住须知 -->
        <div class="base into_know">
            <h2>入住须知</h2>
            <div>
                <h3>入住与退房</h3>
                <span>14:00-21:00/13:00</span>
            </div>
            <div>
                <h3>取消政策</h3>
                <div>在入住前一天2：00PM前取消预定可获得全额退款</div>
            </div>
            <div>
                <h3>入住须知</h3>
                <ul>
                    <li class="know_list">适合儿童(2-12岁)</li>
                    <li class="know_list">适合婴幼儿(2岁以下)</li>
                    <li class="know_list">允许举办派对和活动</li>
                    <li class="know_list">不允许携带宠物</li>
                    <li class="know_list">禁止吸烟</li>
                </ul>
            </div>
        </div>
        <!-- 底部 -->
        <div class="base bottom_bar">
            <div>
                <span>￥285<s>￥285</s><i>/晚</i></span>
            </div>
            <router-link to="/HDetail/reserve" class="reserve">立即预定</router-link>
        </div>
    </div>
</template>
<script>
import Carousel from '../../components/carousel'
import HouseFygs from '../../components/hdetail/house_fygs'
export default {
    data() {
        return {
            st:240,
        }
    },
    components:{
        Carousel,
        HouseFygs,
    },
    created() {
        window.addEventListener("scroll",this.watchScroll,true);
    },
    destroyed() {
        window.removeEventListener("scroll",this.watchScroll)
    },
    methods: {
        watchScroll(){
            var top=Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            var div=document.querySelector(".fixed_top");
            var topBack=document.querySelector(".top_back");
            var topLike=document.querySelector(".collect");
            if(top<240){
                div.style.position="absolute";
                div.style.top=0;
                div.style.background="transparent";
                div.style.height="60px";
                div.style.boxShadow="none";
                topBack.style.color="#fff";
                topLike.style.color="#fff";
            }else if(top>this.st && top>240){
                div.style.height="0px"
            }else if(top<this.st && top>240){
                div.style.position="fixed";
                div.style.top=0;
                div.style.background="#fff";
                div.style.height="60px";
                div.style.boxShadow=" 0 0 10px 0 rgba(0, 0, 0, .3)";
                topBack.style.color="#484848";
                topLike.style.color="#484848";
            }
            this.st=top+1;
        }
    },
}
</script>
<style scoped>
    .hd{
        background: #F2F2F2 !important;
        color: #484848;
        font-size: 14px;
        }
    .fixed_top{
        position: absolute;
        background: transparent;
        width: 100%;
        height: 60px;
        z-index: 9;
        transition: all .3s linear;
        overflow: hidden;
        /* 
        position:fixed;
        background:#fff;
        */
    }
    .fixed_top .pr{
        position: relative;
        text-align: center;
        z-index: 9;
    }
    .fixed_top .pr div{
        position: absolute;
        top: 14px;
        cursor: pointer;
    }
    .fixed_top .pr div:first-child{
        left: 20px;
        color: #fff;
        cursor: pointer;
        padding: 8px;
        margin-top: -8px;
        font-size: 20px;
    }
    .fixed_top .pr div:first-child span{
        font-size: 20px;
        display: inline-block;
        font-weight: bold;
    }
    .fixed_top .pr div:last-child{
        width: 32px;
        height: 32px;
        border-radius: 50%;
        line-height: 30px;
        color: #fff;
        right: 20px;
    }
    .fixed_top .pr div:last-child span{
        font-size: 20px;
    }
    /* 房源基本信息 */
    .base{
        padding: 16px 5%;
        background: #fff;
        color: #484848;
    }
    .base h2{
        font-size: 18px;
        margin-bottom: 20px;
    }
    .baseinfo{
        color: #484848;
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
        margin-top: 4px; 
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
    /* 优惠内容 */
    .hd .youhui{
        margin-top: 1px;
    }
    .hd .youhui .youhui_bg{
        padding: 8px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .hd .youhui .youhui_bg div{
        margin: 0 10px;
    }
    .hd .youhui .youhui_bg div img{
        width: 24px;
        background: transparent;
        vertical-align: middle;
    }
    /* 房源概览 */
    .fangyuangailan{
        margin-top: 5px;
    }
    .fangyuangailan .icon_notice ul{
        display: flex;
    }
    .fangyuangailan .icon_notice ul li span{
        display: block;
        text-align: center;
        margin-bottom: 5px;
    }
    .fangyuangailan .icon_notice ul li~li{
        margin-left: 20px;
    }
    /* 摘要 */
    .abstract{
        margin-top: 1px;
        font-size: 14px;
    }
    .abstract div{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .abstract .abstract_view{
        color: #008489;
        display: inline-block;
        margin-top: 16px;
    }
    
    /* 评论 */
    .remark{
        margin-top: 5px;
    }
            /* 这里来判断调整显示的星级 */
    .remark .remark_star_w{
        width: 75px;
        height: 15px;
        overflow: hidden;
        margin-top: -10px;
    }
    .remark .remark_star_w div{
        width: 75px;
        height: 15px;                                                                                                        
    }
    .remark .remark_star_w div .remark_star{
        display: inline-block;
        width: 15px;
        height: 15px;
        background: url("../../../public/images/remark_star.png") repeat-x;
        background-size: cover;
    }
    .remark .remark_user{
        display: flex;
        flex-flow: column nowrap;
    }
    .remark .remark_user div:nth-child(1){
        display: flex;
        flex-flow: row nowrap;
        margin-top: 20px;
    }
    .remark .remark_user div:nth-child(1) img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .remark .remark_user div:nth-child(1) div{
        margin-left: 12px;
        margin-top: -2px;
    }
    .remark .remark_user div:nth-child(1) div p{
        font-size: 14px;
        font-weight: bold;
    }
    .remark .remark_user div:nth-child(1) div span{
        font-size: 12px;
    }
    .remark .remark_user div:nth-child(2){
        font-size: 16px;
        padding-bottom: 16px;
    }
    .remark .remark_user .remark_view{
        color: #008489;
        display: inline-block;
        margin-top: 16px;
    }
    /* 房源位置 */
    .h_local{
        margin-top: 5px;
    }
    .h_local .h_local_info{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .h_local .h_local_info img{
        vertical-align: middle;
        margin-right: 20px;
    }
    .h_local .h_local_cont{
        margin-top: 20px;
        text-indent: 28px;
    }
    /* 服务设施 */
    .server{
        margin-top: 5px;
        font-size: 14px;
        padding: 16px 0px;
        background: #fff;
        color: #484848;
    }
    .server h2{
        font-size: 18px;
        padding: 0 24px;
    }
    .server .server_type{
        border-bottom: 1px solid #ddd;
        padding: 10px 24px;
        display: flex;
    }
    .server .server_cont .server_type:nth-child(4){
        border-bottom: 0;
    }
    .server .server_type div:nth-child(1){
        display: inline-block;
        font-size: 10px;
        font-weight: bold;
    }
    .server .server_type div:nth-child(1) span{
        display: block;
        text-align: center;
        font-size: 25px;
        font-weight: 500;
    }
    .server .server_type ul{
        padding: 5px 0;
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        align-items: stretch;
        height: 40px;
        margin-left: 30px;
    }
    .server .server_type ul li{
        background: url("../../../public/images/right.png") no-repeat left;
        background-size: contain;
        padding-left: 20px;
        font-size: 12px;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .server .server_cont .server_view{
        color: #008489;
        display: inline-block;
        margin-left: 24px;
    }
    /* 入住须知 */
    .into_know{
        margin-top: 5px;
        margin-bottom: 60px;
    }
    .into_know div h3{
        font-size: 14px;
    }
    .into_know div:nth-child(2) span{
        font-size: 13px;
        display: inline-block;
        margin: 10px 0;
    }
    .into_know div div{
        font-size: 13px;
        margin: 10px 0;
    }
    .into_know div:nth-child(4) ul{
        font-size: 12px;
        margin: 10px 0;
        display: flex;
        flex-flow: row wrap;
    }
    /* 入住须知里的勾勾背景和叉叉背景样式 */
    .into_know div:nth-child(4) ul li.know_list{
        background: url("../../../public/images/right.png") no-repeat left;
        background-size: contain;
        padding-left: 20px;
        width:50%;
        margin-top: 5px;
        box-sizing: border-box;
    }
    .into_know div:nth-child(4) ul li.nknow_list{
        background: url("../../../public/images/right.png") no-repeat left;
        background-size: contain;
        padding-left: 20px;
        width:50%;
        margin-top: 5px;
        box-sizing: border-box;
    }

    /* 底部模块 */
    .bottom_bar{
        position: fixed;
        bottom: 0;
        width: 100%;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, .3);
        height: 65px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    }
    .bottom_bar div:first-child span{
        font-size: 22px;
    }
    .bottom_bar div:first-child span s{
        font-size: 12px;
    }
    .bottom_bar div:first-child span i{
        font-size: 14px;
    }
    .bottom_bar .reserve{
        background: #ff5a5f;
        color: #fff;
        width: 160px;
        height: 48px;
        text-align: center;
        line-height: 48px;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
    }
</style>
