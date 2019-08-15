<template>
    <div>
           <!-- 头部 -->
        <div class="fixed_top" :style="divstyle">
            <div class="pr">
                <div><span class="iconfont icon-zuo"></span></div>
                <div><span class="iconfont icon-aixin collect"></span></div>
            </div>
        </div>
        <!-- 轮播图 -->
        <div style="height:240px;"><carousel></carousel></div>
        <div id="page">
            <div class="fy_page">
                <div>
                    <p>清迈·房源</p>
                    <h2>清迈有一家有“大象叫草服务”的名宿</h2>
                </div>
                <div class="zan">
                        <div>
                            <img src="../../public/images/story/tx.jpg" alt="">
                        </div>
                        <div>
                            <h5>Lena</h5>
                            <span>2019年8月14</span>
                        </div>
                </div>
                <div><p>泼水节期间，为了避开清迈古城里拥挤的人潮，订了一家老城外，有大象叫早服务的Airbnb爱彼迎民宿，房子在一座小山丘上，周边有养象的棚和一条小河。</p>
                <p>民宿的房东是一位纽约女人和她的泰国丈夫。除了和我分享她们浪漫的爱情故事以外，还告诉了我很多关于大象的故事。</p> 
                <p>在泰国有很多大象因为旅游业的影响在遭受着折磨，而房东夫妇则献身于营救大象的事业，他们共同在这儿养了十一只大象，其中大多数都是营救来的，给大象们创造最美好环境的同时，也在培养它们和人们友好相处。</p>
                <p>和大象友好相处的技能很简单，只需备好香蕉！房东的丈夫婚前是位象夫，会象语，他说大象很聪明，20分钟就能学会一种全新的技能或动作，只要你有足够的香蕉，它们能学得更快！</p>
                <p>早上可以和房东要求大象叫早服务，象会来你屋子的窗口坐等吃香蕉。吃完和它们一起去林子里走一圈，看看不远处的瀑布，还可以下河帮小象洗澡，和它们在河里玩一会儿～ 它们会各种撩人的表演，比如“亲一下”，“抱一下”,“喷水”，“拱手” 我的心都被它们萌化了！和大象的亲密接触，让我在这里上了一堂#你不知道的当地文化#课。</p>
                <p>这里原生态的一切与世隔绝，房东说“这里的生活，教会了我什么才是生命中最重要的事”。</p>
                <p> 在这样的地方住几天，大概可以算是我来泰国以来最最特别的旅行体验了～</p></div>
                <div>
                    <span class="iconfont icon-zansel"></span>
                    <span>833人已赞</span>
                </div>
            </div>
                  <!-- 房源概览 -->
            <div class="tjfy">
                <h4>推荐房源</h4>
                <div class="fygl_info">
                    <House/>
                </div>
            </div>
            <div class="pl">
                <div class="pl-title">
                    <h4>70条评论</h4>
                    <span @click="tcpl"><a href="javascript:">写评论</a></span>
                </div>
                <div>
                    <div>
                        <div>
                            <span>Hing</span><span>2018年8月8日</span>
                        </div>
                        <div>
                            <span>99</span><span class="iconfont icon-zansel" ></span>
                        </div>
                    </div>
                    <p class="plnra">有谁像我被图片吸引过来的</p>
                </div>
                
             
                <div class="btn" @click="tcplnr">
                    <a href="javescript:">查看全部评论</a>
                </div>
            </div>
    
        </div>
    
         <div class="tabbar">
                <div @click="tcpl">添加评论</div>
                <div> <span>836个赞</span>
                <span class="iconfont icon-zansel"></span></div>
         </div>
         <div class="tcpl">
             <div>
                <span class="iconfont icon-chacha" @click="closepl"></span>
                <span>提交</span>
             </div>
             <div>
                <textarea name="" id="" placeholder="说点什么..."></textarea>
             </div>
         </div>
          <div class="plnr">
             <div>
                <span>71条评论</span>
                <span>添加评论</span>
             </div>
             <div>
                
             </div>
         </div>
        
    </div>
</template>
<script>
import Carousel from "../components/carousel.vue"
import House from "../components/story/house.vue"
export default {
    data() {
        return {
            divstyle:{
                background:"transparent",
                borderBottom:0,
                color:"#000"
            }
        }
    },
    mounted() {
        window.addEventListener("scroll",this.handleScroll,true)
    },
    methods: {
        handleScroll(){
            let st=Math.max(document.body.scrollTop || document.documentElement.scrollTop);
            var span=document.querySelectorAll(".pr span")
            if(st>200){
                this.divstyle.background="#fff"
                this.divstyle.borderBottom="1px solid #999"
            }else{
                this.divstyle.background="transparent"
                this.divstyle.borderBottom=0
            }

        },
        tcpl(){
            var plk=document.querySelector(".tcpl");
            plk.style.height="100%"
            var srk=document.querySelector(".tcpl textarea");
            srk.focus();
        },
        closepl(){
             var plk=document.querySelector(".tcpl");
            plk.style.height="0"
        },
        tcplnr(){
            var plk=document.querySelector(".plnr");
            plk.style.width="100%"
        },
    },
    components:{
        Carousel,
        House
    }
}
</script>
<style scoped>
     .fixed_top{
        position: fixed;
        top:0;
        background: transparent;
        width: 100%;
        height: 60px;
        z-index: 9; 
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
    .fixed_top .pr div:first-child span{
        color: #fff;
        cursor: pointer;
        padding: 20px;
        margin-top: -8px;
        font-size: 26px;
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
    .zan{
        display: flex;
        margin-bottom: 20px;
    }
    .zan div img{
        width: 30px;
    }
    .zan div span{
        font-size: 13px;
        color: #999;
    }
    .zan div img{
        border-radius: 50%;
        margin-right: 15px;
        margin-top:5px;
    }
    .fy_page div:first-child p{
        font-size:12px;
        font-weight: bold;
        color:rgb(141, 78, 7);
        margin-bottom: 8px;
    }
    #page{
        margin:20px 25px;
    }
    .fy_page div:nth-child(3) p{
        font-size: 15px;
        margin-bottom: 20px;
    }
    .fy_page div:last-child{
        margin-bottom: 25px;
    }
    .fy_page div:last-child span:first-child{
        font-size: 18px;
        margin-right: 10px;
    }
     .fy_page div:last-child span:last-child{
        font-size: 12px;
    }
    .fy_page h2{
        width:75%;
        margin-bottom: 20px;
    }
    .pl-title{
        display: flex;
        justify-content: space-between;
        margin-top:35px;
        margin-bottom:20px;
    }
    .pl-title span a{
        font-size: 13px;
        font-weight: 500;
        
        color:rgb(83, 134, 136);
    }
    .pl div:nth-child(2) div{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        margin-bottom: 4px;
    }
    .pl div:nth-child(2) div :first-child span:last-child{
        color:#999;
        margin-left: 10px;
    }
     .pl div:nth-child(2) div :last-child span:last-child{
        color:#666;
        margin-left:5px;
    }
    .pl .btn{
        border-top:1px solid #999;
        border-bottom:1px solid #999;
        padding:12px 0;
        margin-top:20px;
        margin-bottom:100px;
    }
    .pl .btn a{
        color:cadetblue;
        font-size: 14px;
    }
    .pl .plnra{
        color:#484848;
        font-size: 14px;
    }
    .tabbar{
        position: fixed;
        bottom:0;
        width: 100%;
        height: 60px;
        background: #fff;
        border-top: 1px solid #999;
        z-index: 111;
        display: flex;
        align-items: center;
        align-items: center;
        font-size: 12px;
        color:#999;
    }
    .tabbar div:first-child{
        border-bottom: 1px solid #999;
        padding-right:150px;
        padding-bottom:8px;
        margin:0 50px;
    }
    .tabbar div:last-child span:first-child{
        margin-right: 10px;
    }
    .tcpl{
        position: fixed;
        z-index: 222;
        bottom:0;
        background: #fff;
        width: 100%;
        height: 0px;
        transition:height .2s linear;
        overflow: hidden;
    }
    .tcpl div:first-child{
        display: flex;
        justify-content: space-between;
        margin:25px 25px;
        font-size: 14px;
    }
    .tcpl div:nth-child(2){
        box-sizing: border-box;
        padding: 0 25px;
    }
    .tcpl div textarea{
        border: 0;
        outline: 0;
        font-size: 16px;
        width: 100%;
        height:70vh;
    }
     .plnr{
        position: fixed;
        z-index: 225;
        top: 0;
        right:0;
        background: #fff;
        width: 0;
        height: 100%;
        transition:width .3s linear;
        overflow: hidden;
    }
</style>
