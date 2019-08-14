<template>
    <div class="abstract">
        <router-link to="/HDetail" class="back"><span class="iconfont icon-arrow-left"></span></router-link>
        <div class="abstract_p">
            <h2>房源介绍</h2>
            <h3>摘要</h3>
            <div>
                【近地铁站】房源靠近地铁站,出行方便,换乘东站方便快捷｡
                【干净卫生】小舍坚持的第一原则,干净!!!每次打扫卫生都非常用心,对于每一个客人都认真服务,收到暖暖的评价都真心开心｡
                【大投影】房东本人是个设计师,也是个电影爱好者,房子里配了投影,看大片非常棒｡
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .abstract{
        color: #484848;
        font-size: 14px;
    }
    .back{
        display: inline-block;
        margin: 20px 0px 0 20px;
        font-size: 20px;
        font-weight: bold;
    }
    .abstract_p{
        margin: 20px 20px;
    }
    h2{
        margin-bottom: 30px;
    }
    h3{
        margin-bottom: 15px;
        font-size: 14px;
    }
    .abstract_p{
        padding-bottom: 20px;
        border-bottom: 1px solid #ddd;
    }
</style>
