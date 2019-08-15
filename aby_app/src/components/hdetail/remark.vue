<template>
    <div>
        <router-link to="/HDetail" class="back"><span class="iconfont icon-arrow-left"></span></router-link>
        <div class="title">
            <h2><span>22</span>条评价</h2>
            <div class="remark_star_w">
                <div>   
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                    <span class="remark_star"></span>
                </div>
            </div>
        </div>
        <div class="user_remark">
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
        </div>
        <div class="user_remark">
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
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style scoped>
.back{
    display: inline-block;
    margin: 20px 0px 0 20px;
    font-size: 20px;
    font-weight: bold;
}
.title{
    padding: 16px 16px 0;
}
.remark_star_w{
    width: 75px;
    height: 15px;
    overflow: hidden;
    margin-bottom: 20px;
}
.remark_star_w div{
    width: 75px;
    height: 15px;                                                                                                 
}
.remark_star_w div .remark_star{
    display: inline-block;
    width: 15px;
    height: 15px;
    background: url("../../../public/images/remark_star.png") repeat-x;
    background-size: cover;
}

.user_remark{
    margin: 4px 24px;
    border-top: 1px solid #ddd;
}
.user_remark div:nth-child(1){
    display: flex;
    flex-flow: row nowrap;
    margin-top: 20px;
}
.user_remark div:nth-child(1) img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    vertical-align: middle;
}
.user_remark div:nth-child(1) div{
    margin-left: 12px;
    margin-top: -2px;
}
.user_remark div:nth-child(1) div p{
    font-size: 14px;
    font-weight: bold;
}
.user_remark div:nth-child(1) div span{
    font-size: 12px;
    display: inline-block;
    margin-top: -5px;
}
.user_remark div:nth-child(2){
    font-size: 14px;
    padding-bottom: 16px;
}
</style>
